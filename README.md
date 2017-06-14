
## Cakes

- the files are organised into **containers** which are the smart containers that manage state (only CakeList in this case) and dumb **components**
- Used JEST and (mostly) snapshot testing.
- I normally use **enzyme**, I wanted to get away without using it as I thought this is a simple test but still went back and added it when I needed to simulate DOM events (and it was painful using react-test-tools)
- The api doesn't return a unique identifier with each key so I used the array index as a key when rendering cakes. That is wrong in a real app as it screws up React smart diffing when rerendering the DOM
- I have added very basic edit functionality as I didn't know what you had in mind exactly