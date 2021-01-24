This project is to explore issues arising from the use of Enzyme with React Hooks.

Update, 24 Jan 2021: The .simulate method in Enzyme seems to not work with recent versions of React.  
Unless I'm mistaken, the sample code runs fine in the browser (npm start) but fails a simple test requiring .simulate (npm test). The issue persists with both the useState hook and the class-based setState approach (you can un-comment the class-based version in App.js if you want to see for yourself.)  

Please feel free to contact me if I've made some obvious error.  