import openai
import requests
from PIL import Image
from io import BytesIO

openai.api_key = "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"

def generate_image(text):
    response = openai.Completion.create(
        engine="image-alpha-001",
        prompt=f"Generate an image of: {text}",
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.7,
    )

    image_url = response.choices[0].text.strip()
    image_data = requests.get(image_url).content
    image = Image.open(BytesIO(image_data))

    return image