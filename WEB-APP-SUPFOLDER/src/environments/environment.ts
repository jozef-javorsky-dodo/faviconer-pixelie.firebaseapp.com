export const environment: object = {

  production: <boolean>false,

  firebase: {

    apiKey: <string>' ',

    authDomain: <string>' ',

    projectId: <string>' ',

    storageBucket: <string>' ',

    messagingSenderId: <string>' ',

    appId: <string>' ',

    measurementId: <string>' '

  }

}









const char_pseudo_random_strings_arr: string[] = [

  "p@v^We5gH#JQ2ZL8z!h1T",

  "x2uG1a!F*7@O#YlDpQfI",

  "@8jUv1o!P2c0yJ7ZG@zN",

  "r7gDxM!kPn8^QsKo@cE0i",

  "l6oB8u9#f!WZgxQmVr1@^",

  "#y2o^1JbN8!GX7zUhkPp4",

  "@cMx!zE3o%bVl&u^jKr@8",

  "F*8t^a@v!LzI3O7C!i0Jr",

  "3^YmR@#PQ@o7l4d1Gjk!u",

  "q*#XlM!6JUy^S9eW2k&@C",

  "VnD^Gf!vA7zJL8P2lYe#p",

  "1m@4vE*!Bc^oXuZ5kbljg",

  "fKv4yQ!^9@b3DcJWsU6^x",

  "Ee^8oX#1Hw!qzrT&y9jPm",

  "3yS^uZ5q@v0!W&^L2MjQg",

  "7u6qZPm^@S4gA*9!hJn2Y",

  "PpN1k2^!#oWQq7hHv!4g@",

  "4p#7G8Iv@G^DqZoR2rM6JL",

  "9@^U4S2sFj&x8o3QbD1#Vv",

  "C!6@o4dWuQ2jG8l1#v7*Ft",

  "@I^oRQ!8Fm&kPv6JzDx4Lu",

  "Q*6Pv9Jt#I^Y5r8Uu1GgEa",

  "3D6@eP2fL*8^yNv0q#^ZS7",

  "@FyJdL*8YmN7^9oX5!cGzV",

  "z2!l3E@uL*Xo1h6S7FyW^J",

  "@#^H!sO5UgY2@kR^qJ1BZ7",

  "e*^!rPmGp0H^2Q#Jl1o4B7",

  "7!kW@#2z9^F1u4YVcXbH6J",

  "l9m0k^4VQ&@oWp#N3UcSvX",

  "1o#4r5!Hm^v&GxPjI3yD@B",

  "nOq^vYBp@G5!6rJlZ2c4S9o",

  "hI2^1b7k4*3T8QcL!yJpV0",

  "f2^G@l!J*Yo5r8Uu1GgEa",

  "uQ^o5@B1p6!vH*Jr8Z0Fm7",

  "W1!vP&U^7cXy#Dz4gO3oBk",

  "h&@u2L^Q0v7cW!o5ZxqJf9",

  "I9^4v3o2A1@WZ*Pm#lU8Jq",

  "PmXj!o4d5N^Q9@L8F#Yv1H",

  "5@Yg^LqX1RZ4tJ#o9Pv^W6F",

  "9Jp^vJq5c4z3oG8u0m@#wF2",

  "O1#^!8FqV@W6mXgZPdN*5c9",

  "Qr&uPvH@oW^8j2x#L1!k5mZ",

  "r^Xp@vJt9q8u5B&!E2H*oM1",

  "tR^P0mL#e1o2x!y8cQj4N6V",

  "U^ZP8eF@oXv#jYlD1m5cJ6g",

  "A5Pv1@!oW6^4c8MzJr9Bj2k",

  "3D0k8m1oP^cWx#9y2L*6uHj",

  "6jBZ#oX8S1G2r@u5p^Y3cN9",

  "oVc*W1WYg6L7q9F^xJ^m8H2Z",

  "S0P#P6vYx!@o&!2^cJ8F5r3",

  "u3&L5rP^XyM2@8qN*oZ!gF7",

  "5B^oXq8j!H6@2U1Nz0^L7Pv",

  "p^r8S2ZGq@N9L4j1v0M3o6J#",

  "Bp^2L@Y#v^XW7o1GgUy!@c9J",

  "9^Wc!@o1rG*^lZ8X5q2N7H6",

  "j^v@B4u!cLg6B!oX8^JrP1#",

  "r^!@oW3c^J4S2ZPqH5MvL8g",

  "u3F!qZ^Pv8L7W6N1XoJ5r@o2",

  "P^uH5W8XgJcS2Zv1#q@oL9r3",

  "S1^cH7rP2L5vW4@qY^u3N6g8",

  "6S2q1N7P^c!@WvH5gJ8rY3L4",

  "qHj4Z^oP9rW2v@Lg5J6N8S1c3",

  "Z^J1oH4P9r@L6N8gY5S2cW7v3",

  "oX^L1gJr@N8W2S5v9Pq4c6Y3",

  "Jg^N8W5S2cY3qH4oXv@L1r6P9",

  "q2g6P9oX5L8J4S1rWv@Y3N7cH",

  "Z^oJ6L7rWv@Y3N1H2cS5P9g8",

  "W1S2gH4qJ7rY3L5oXv@P9N8c6",

  "c^H4S1gZ2oXv@P9L5Y3N8rW7q",

  "P^L1gY3oXv@N8rW7S5H4qJ6c2",

  "oW7S5gP9L1N8cH4J6rY3v@X2q",

  "J6cW4oXv@L1gY3N8rH2S5P9q7",

  "qH4S5cY3L1oXv@rN8W7gP9J6",

  "Oq5^vR4!zYm1j8&u@Bd2S3cH6W7n",

  "j1kUqL!z^PcX5W6^S8YvN9m^r7D2o",

  "Bk^Uo7yH1W!vZj2r^8@GmN5cXqL3P",

  "4^B9mO1PvWqD3S7cXj2L!@N^U8yH6o",

  "qY9^U8H7yWv!@jZ2oX5^B3mL1S4c6P",

  "X7^BqW3S4c!@oZ5yH1U9jN^L6m8vP2",

  "9P^L1!@o7X8W5W6S4^Bc2HjZ3NqyU",

  "qZ5L7X6W4c2S3!@B9P^U1o8yHjNv",

  "c6S4X5L1o^H7v!@WqY3jP2U8B9N^",

  "q5o8S4!@N^vH7Y6W2^P3c1jU9LX",

  "3P^N9L2j8q!@X6H7^W1S5oU4cYv",

  "BvX5U3L1N8W!@o4P7Sj6c2q^H9y",

  "9^U8cH2N1S4jW!@qL6Y5o3P7XvB",

  "7^BqH6S5L8o1P3vW2!@N9cYjU4X",

  "2^U6X5Y4H3o1j8P7vL!@qS9WcN^B",

  "XvWq!@jP3S4L2^B8oY5N^H7U9c6",

  "Y9S6H8o^P3N7!@L5qW1cX2vU4Bj",

  "L3S7!@X5^B1PqY8W4U6N2o9cHjv",

  "S8W5^B2P9H4!@oX3U7Y6qL1Nvjc",

  "vH8oX2L3N7^U9WqY4!@jP5c1S6B",

  "S1oU6qB2^Y3L5!@H7v4jN9X8PcW",

  "N8^U5B1oP2!@L6S3H9vXjW7Y4qc",

  "j3U6qS9X5P7^o8L!@Wc1H2vY4N^B",

  "qW6vH7oN^S1P2L3!@cX9^B5U8Y4j",

  "c8B2S5X1H9jL3qW6^P4N7!@UoYv",

  "jP3S6N1!@qB4o5L2^W9H7Y8UcXv",

  "PqL9W4S5N1!@U7o3cXv^B2Y8jH6",

  "j^B1N7L6P5oX8Y4H9vW3S2!@Uqc",

  "oN^P4H7S9Y8L!@WqB5c6^U1v2jX3",

  "U1oX2^H6c9L3N7!@B8W4qYjS5vP",

  "qS6o^H8U1Y3L5P4W9c7jN2v^B!@X",

  "BvX7N^H1oY3L6S9P5^c8U2Wqj4!@",

  "jN^B5H2q!@oS9P4U7L3W8X1v6Yc",

  "o^W2cP7Y4H8vS5qN^U9L3B1Xj6!@",

  "P8^H6U1oL9Y3cX2jW4BqN7S5!@v",

  "UqL5W4Y6oN9^vB2cP7S3X1!@jH8",

  "BvU3S1o^H7Y6L5W9c4qP2jN8X!@",

  "N1S9q^U6vY5L7oW8c3!@B4X2HjP",

  "UoH7P8qN2S9^cB1XvL6Y5j3!@W4",

  "B2^S6Y8oP3N7H1L9qXv!@jW4c5",

  "cXvB2S1N8P6^jY5H9W4!@oU7qL3",

  "oH1Y6L8q^W9S4cX5P7^N2BjU3!@",

  "cB2Y9qH3^L6S4P7W1vX8N^jU5!@",

  "W3cP7^N9L1Y2qH6jU5X4o8S!@vB",

  "U1oP6^L7W5N9jY3H8vB2q!@S4Xc"

];
