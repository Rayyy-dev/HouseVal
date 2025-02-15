# -*- coding: utf-8 -*-
"""US_Housing.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/github/ElarizT/Machine_Learning_Projects/blob/main/US_Housing.ipynb
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, r2_score
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
import os
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import RandomForestClassifier

# Open the csv file
df = pd.read_csv('US_Housing.csv')

df.head()

# Checking how many empty cells there are on each column
df.isnull().sum()

# Drop all empty rows
df = df.dropna()

# Check it again empty sum of cells to be sure
df.isnull().sum()

# Also drop duplicates just to be sure
df = df.drop_duplicates()

# Convert all columns from object to numeric
for column in df.columns:
    if df[column].dtype == 'object':
        le = LabelEncoder()
        df[column] = le.fit_transform(df[column])

df.head()

# Create new columns to improve correlation with target column
df['BB'] = df['Beds'] + df['Baths']

city_center = (40.7128, -74.0060)  # Example: New York City coordinates
df['distance_to_center'] = np.sqrt(
    (df['Latitude'] - city_center[0])**2 +
    (df['Longitude'] - city_center[1])**2
)

df.head()

# Check correlation of target with each column/features
df_corr = df.corr()

df_corr_sorted = df_corr['Price'].sort_values(ascending=False)
print(df_corr_sorted)

# Define features and target
features = df[['Median Household Income', 'Baths', 'distance_to_center', 'Living Space']]

X = features
y = df['Price']

# Split date to test and training data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state=42)

# Build a Random Forest Regressor model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Check the score for knowing accuracy
y_pred = model.predict(X_test)

print(r2_score(y_test, y_pred))

# Save the model for later usage
import joblib

# Save the trained model
joblib.dump(model, 'model_5.pkl')

# Load the model
loaded_data = joblib.load('model_5.pkl')

# Question inputs to find out criterias
question1 = input('What is the median household income?: ')
question2 = input('How many baths there are?:')
question3 = input('What is the distance to the center?:')
question4 = input('How big is living space?:')

# Adding criterias and question accordingly
new_data = ({
    'Median Household Income': [question1],
    'Baths': [question2],
    'distance_to_center': [question3],
    'Living Space': [question4]
})

# Converting them to new dataframe and printing predicted price
new_df = pd.DataFrame(new_data)

predictions = loaded_data.predict(new_df)
print(f"Prediction of the price is {predictions}")

