import React, { useState, useRef } from 'react';
import { Button } from '@components/ui/button';

export default function TestMic() {
    const [recording, setRecording] = useState(false);
    const recorder = useRef<MediaRecorder | null>(null);
    const stream = useRef<MediaStream | null>(null);
    const [transcription, setTranscription] = useState<string | null>(null);

    const handleMicClick = async () => {
        try {
            if (!recording) {
                const userMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                stream.current = userMediaStream;

                recorder.current = new MediaRecorder(userMediaStream);
                const chunks: Blob[] = [];

                recorder.current.ondataavailable = (event) => {
                    chunks.push(event.data);
                };

                recorder.current.onstop = async () => {
                    const audioBlob = new Blob(chunks, { type: chunks[0].type });
                    await sendAudioToBackend(audioBlob);
                };

                recorder.current.start();
                setRecording(true);
            } else {
                recorder.current?.stop();
                setRecording(false);

                stream.current?.getTracks().forEach(track => track.stop());
            }
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const sendAudioToBackend = async (audioBlob: Blob) => {
        try {
            const formData = new FormData();
            formData.append('file', audioBlob, 'uploaded_audio.wav');

            const response = await fetch('http://127.0.0.1:5000/transcribe', {
                method: 'POST',
                mode: 'cors',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to send audio to backend');
            }

            const data = await response.json();
            setTranscription(data.transcription);
        } catch (error) {
            console.error('Error sending audio to backend:', error);
        }
    };

    return (
        <div>
            <Button onClick={handleMicClick} color="primary">
                {recording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            {transcription && (
                <div>
                    <h3>Transcription:</h3>
                    <p>{transcription}</p>
                </div>
            )}
        </div>
    );
}
