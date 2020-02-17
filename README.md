# Unsplash 100 multi-labels classifier
This is a classifier trained over 100 labels of unsplash photos
I trained it with the fast.ai library [fast.ai](https://github.com/fastai/fastai)
The labels are:
```
["airplane", "ambulance", "animal", "artist", "aurora", "baby", "beach", "bear", "bedroom", "bicycle", "bird", "boats", "book", "bridge", "building", "bus", "cars", "castle", "cat", "city", "clouds", "college", "column", "concert", "couple", "crops", "dance", "dawn", "deer", "desert", "dessert", "doctor", "dog", "dolphins", "field", "fire", "floor", "food", "golf", "graffiti", "grandfather", "grandmother", "grass", "hair", "hand", "horse", "hospital", "house", "human", "insect", "kid", "library", "lights", "man", "moon", "mountain", "music", "nature", "neon", "nurse", "ocean", "painting", "palm", "party", "person", "phone", "plant", "rain", "rainforest", "restaurant", "river", "robot", "rocks", "roses", "shirt", "shop", "sign", "sky", "skyscraper", "snow", "soccer", "sports", "stadium", "staircase", "stars", "storm", "street", "sun", "sunrise", "temple", "tree", "truck", "vegetable", "water", "waves", "weed", "windows", "woman", "wood"]
```
The app [Unsplash100Labels](https://unsplash100labels.herokuapp.com/) is deployed on heroku using a ported version to heroku
of this guide [fastai-Guide](https://course.fast.ai/deployment_render.html),
# Original guide
* Original guide for Render [Fast.ai course](https://course.fast.ai/deployment_render.html)
# Guide
* [Rama Blog](https://blog.ramagg.com)

# Data extraction and Model training
You can see the process of training and obtaining the data in [this notebook](https://colab.research.google.com/drive/1GP_9go6NqARmDQ7hAYeydKnKpxfhlZ_O),
I use fast.ai library to train it and Unsplash api to get the data.
