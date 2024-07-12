import io
import os
import subprocess
from google.oauth2 import service_account
from google.cloud import speech
from pydub import AudioSegment

def convert_audio_to_wav(input_file: str, output_file: str):
    subprocess.run([
        'ffmpeg', '-y', '-i', input_file, '-acodec', 'pcm_s16le', '-ar', '44100', output_file
    ], check=True)

def get_transcribed_text(audio_file: str, sample_rate_hertz: int = 44100, language_code: str = 'en-US') -> str:
    converted_audio_file = 'output_audio.wav'
    convert_audio_to_wav(audio_file, converted_audio_file)
    
    print(os.listdir())
    
    audio_segment = AudioSegment.from_wav(converted_audio_file)
    mono_audio_segment = audio_segment.set_channels(1)

    mono_audio_bytes = io.BytesIO()
    mono_audio_segment.export(mono_audio_bytes, format="wav")
    mono_audio_bytes.seek(0)

    audio = speech.RecognitionAudio(content=mono_audio_bytes.read())

    credentials = service_account.Credentials.from_service_account_file('serviceAccountKey.json')
    client = speech.SpeechClient(credentials=credentials)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=sample_rate_hertz,
        language_code=language_code,
    )


    response = client.recognize(config=config, audio=audio)

    transcribed_text = ' '.join(result.alternatives[0].transcript for result in response.results)
    print(f'Transcribed Text {transcribed_text}')
    
    return transcribed_text