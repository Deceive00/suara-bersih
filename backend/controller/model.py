import io
from google.oauth2 import service_account
from google.cloud import speech
from pydub import AudioSegment

def get_transcribed_text(audio_blob: bytes, sample_rate_hertz: int = 44100, language_code: str = 'en-US') -> str:
    audio_segment = AudioSegment.from_file(io.BytesIO(audio_blob))
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
    return transcribed_text