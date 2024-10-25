# Know-Fact-About-the-Number
![numbers-fact-v1](https://github.com/user-attachments/assets/88670ac9-e1b9-4540-a471-dfe5595839cd)

This project fetches a fun fact about a given number using the Numbers API. Users can input a number, and the app will display a fact about the number. If no number is entered, an alert will prompt the user to enter a number.

## Features

- **Number Fact Fetching**: Users can input any number to fetch a fact about that number.
- **Error Handling**: If the input is empty, an alert message prompts the user to enter a number.
- **Loading Indicator**: A Bootstrap spinner is displayed while the fact is being fetched.

## Instructions

1. **HTML Structure**:
   - The number input should have the following id:
     - Input element: `userInput`
   - The fact display paragraph should have the following id:
     - Paragraph element: `fact`

2. **Functionality**:
   - When a user enters a number and presses **Enter**:
     - If the input is empty, display an alert message.
     - If the input is not empty:
       - Append the number to the URL `https://apis.ccbp.in/numbers-fact?number=`.
       - Make a **GET** HTTP request using `fetch` to retrieve the fact.
       - Show a loading spinner while the request is being made.
       - Display the fact in the `fact` paragraph once the request is complete.
