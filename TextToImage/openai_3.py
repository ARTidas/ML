import openai
openai.api_key = "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"

#model_engine = "image-alpha-001" # set the model engine to use
model_engine = "davinci"

prompt = (
    "Generate an image of: A beautiful lady in the night."
)

response = openai.Completion.create(
    engine=model_engine,
    prompt=prompt,
    max_tokens=200,
    n = 1,
    stop=None,
    temperature=0.5,
)

image_url = response.choices[0].text.strip()
print(image_url)