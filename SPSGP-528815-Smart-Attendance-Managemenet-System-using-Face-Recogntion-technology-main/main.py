from datetime import datetime
import cv2
import face_recognition
import os
from flask import Flask, render_template, Response
from pymongo import MongoClient

app = Flask(__name__, template_folder="templates")

# MongoDB Setup
mongo_client = MongoClient('mongodb+srv://aspringsoul120:FUJbIIoRyaBFAwGX@cluster0.hqymmtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = mongo_client['test']  # Corrected to access the 'test' database
attendance_collection = db['attendances']  # Correctly accessing the 'attendances' collection

# Update the dataset_path with the path to the folder containing the dataset images.
dataset_path = "dataset"

def load_dataset():
    dataset = {}
    for folder_name in os.listdir(dataset_path):
        person_name = folder_name
        person_folder = os.path.join(dataset_path, folder_name)
        person_images = [os.path.join(person_folder, image) for image in os.listdir(person_folder)]
        person_encodings = [face_recognition.face_encodings(face_recognition.load_image_file(image))[0] for image in person_images]
        dataset[person_name] = person_encodings
    return dataset

dataset = load_dataset()

def detect_faces(frame):
    face_locations = face_recognition.face_locations(frame)
    return face_locations

def recognize_faces(frame):
    face_encodings = face_recognition.face_encodings(frame)
    face_names = []
    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces([item for sublist in dataset.values() for item in sublist], face_encoding)
        name = "Unknown"
        if True in matches:
            first_match_index = matches.index(True)
            name = list(dataset.keys())[first_match_index]
        face_names.append(name)
    return face_names

def mark_attendance(name):
    try:
        today_str = datetime.now().strftime('%Y-%m-%d')
        existing_record = attendance_collection.find_one({'name': name, 'date': today_str})

        if not existing_record:
            attendance_record = {
                'date': today_str,
                'time': datetime.now().strftime('%H:%M:%S'),
                'name': name,
                'present': True
            }
            result = attendance_collection.insert_one(attendance_record)
            print(f"Attendance record inserted with id: {result.inserted_id}")
    except Exception as e:
        print(f"An error occurred while marking attendance: {e}")

def generate_frames():
    video_capture = cv2.VideoCapture(0)
    while True:
        ret, frame = video_capture.read()
        if not ret:
            break
        face_locations = detect_faces(frame)
        face_names = recognize_faces(frame)
        for (top, right, bottom, left), name in zip(face_locations, face_names):
            if name != "Unknown":
                mark_attendance(name)
        ret, jpeg_frame = cv2.imencode('.jpg', frame)
        frame_bytes = jpeg_frame.tobytes()
        yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

        # yield (b'--frame\r\nb'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
