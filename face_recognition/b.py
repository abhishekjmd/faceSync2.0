import cv2
import asyncio
import websockets

class FaceRecognition:
    def __init__(self):
        pass

    async def face_recog(self, websocket, path):
        print("Client connected.")
        try:
            def draw_boundary(img, classifier, scaleFactor, minNeighbors, color, text, clf):
                gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
                features = classifier.detectMultiScale(gray_image, scaleFactor, minNeighbors)

                for (x, y, w, h) in features:
                    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 3)
                    id, predict = clf.predict(gray_image[y:y + h, x:x + w])

                    confidence = int((100 * (1 - predict / 300)))

                    if confidence > 10:
                        cv2.putText(img, f"Student_ID:{10}", (x, y - 80), cv2.FONT_HERSHEY_COMPLEX, 0.8, (64, 15, 223), 2)
                        cv2.putText(img, f"Name:{5}", (x, y - 55), cv2.FONT_HERSHEY_COMPLEX, 0.8, (64, 15, 223), 2)
                        cv2.putText(img, f"Roll-No:{15}", (x, y - 30), cv2.FONT_HERSHEY_COMPLEX, 0.8, (64, 15, 223), 2)
                    else:
                        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 3)
                        cv2.putText(img, "Unknown Face", (x, y - 5), cv2.FONT_HERSHEY_COMPLEX, 0.8, (255, 255, 0), 3)

            def recognize(img, clf, faceCascade):
                draw_boundary(img, faceCascade, 1.1, 10, (255, 25, 255), "Face", clf)
                return img

            faceCascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
            clf = cv2.face.LBPHFaceRecognizer_create()
            clf.read("clf.xml")

            videoCap = cv2.VideoCapture(0)

            while True:
                ret, img = videoCap.read()
                img = recognize(img, clf, faceCascade)
                
                # Encode the frame as JPEG
                _, buffer = cv2.imencode('.jpg', img)
                data = buffer.tobytes()

                # Send the data to the connected WebSocket client
                await websocket.send(data)

        finally:
            print("Client disconnected.")

if __name__ == "__main__":
    start_server = websockets.serve(FaceRecognition().face_recog, "localhost", 8765)

    # Print server started message
    print("Server started.")

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
