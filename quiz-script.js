// Load questions from external file
const questions = typeof allQuestions !== 'undefined' ? allQuestions : [
    // HTML - BASIC
    { category: "html", difficulty: "easy", type: "mcq", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], answer: 0 },
    { category: "html", difficulty: "easy", type: "mcq", question: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], answer: 2 },
    { category: "html", difficulty: "easy", type: "mcq", question: "Which attribute specifies a unique id for an HTML element?", options: ["class", "id", "name", "key"], answer: 1 },
    { category: "html", difficulty: "easy", type: "mcq", question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
    { category: "html", difficulty: "easy", type: "mcq", question: "What is the correct HTML for inserting an image?", options: ["<img src='image.jpg'>", "<image>image.jpg</image>", "<img href='image.jpg'>", "<picture>image.jpg</picture>"], answer: 0 },
    
    // HTML - MEDIUM
    { category: "html", difficulty: "medium", type: "mcq", question: "Which HTML5 element defines navigation links?", options: ["<navigation>", "<nav>", "<navigate>", "<menu>"], answer: 1 },
    { category: "html", difficulty: "medium", type: "mcq", question: "What is the purpose of the <meta> tag?", options: ["Display metadata", "Provide metadata about HTML document", "Create metadata links", "Style metadata"], answer: 1 },
    { category: "html", difficulty: "medium", type: "mcq", question: "Which input type is used for email validation?", options: ["<input type='text'>", "<input type='email'>", "<input type='mail'>", "<input type='validate'>"], answer: 1 },
    { category: "html", difficulty: "medium", type: "code", question: "What will this code display?", code: "<p>Hello <span style='display:none'>World</span>!</p>", options: ["Hello World!", "Hello !", "World!", "Hello"], answer: 1 },
    
    // HTML - HARD
    { category: "html", difficulty: "hard", type: "mcq", question: "Which attribute makes an input field required?", options: ["validate", "required", "mandatory", "needed"], answer: 1 },
    { category: "html", difficulty: "hard", type: "mcq", question: "What is the correct way to make a checkbox checked by default?", options: ["<input type='checkbox' checked>", "<input type='checkbox' default>", "<input type='checkbox' selected>", "<input type='checkbox' value='checked'>"], answer: 0 },
    { category: "html", difficulty: "hard", type: "code", question: "What does the 'defer' attribute do in script tags?", code: "<script src='app.js' defer></script>", options: ["Loads script immediately", "Executes script after HTML parsing", "Delays script by 1 second", "Disables the script"], answer: 1 },

    // CSS - BASIC
    { category: "css", difficulty: "easy", type: "mcq", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], answer: 0 },
    { category: "css", difficulty: "easy", type: "mcq", question: "Which property changes text color?", options: ["text-color", "font-color", "color", "text-style"], answer: 2 },
    { category: "css", difficulty: "easy", type: "mcq", question: "How do you select an element with id 'header'?", options: [".header", "#header", "*header", "header"], answer: 1 },
    { category: "css", difficulty: "easy", type: "mcq", question: "Which property is used to change background color?", options: ["bgcolor", "background-color", "color-background", "bg-color"], answer: 1 },
    { category: "css", difficulty: "easy", type: "code", question: "What will be the text color?", code: "p { color: red; }\n.blue { color: blue; }\n<p class='blue'>Text</p>", options: ["Red", "Blue", "Black", "Default"], answer: 1 },

    // CSS - MEDIUM
    { category: "css", difficulty: "medium", type: "mcq", question: "What is the default position value?", options: ["relative", "absolute", "static", "fixed"], answer: 2 },
    { category: "css", difficulty: "medium", type: "mcq", question: "Which property controls the stacking order?", options: ["z-index", "stack-order", "layer", "position-index"], answer: 0 },
    { category: "css", difficulty: "medium", type: "mcq", question: "What does 'display: flex' do?", options: ["Makes element flexible", "Creates flexbox container", "Displays element", "Fixes element position"], answer: 1 },
    { category: "css", difficulty: "medium", type: "code", question: "What is the specificity of '#id .class'?", code: "#id .class { color: red; }", options: ["0,1,1", "1,1,0", "1,0,1", "0,2,0"], answer: 2 },
    { category: "css", difficulty: "medium", type: "mcq", question: "Which unit is relative to viewport width?", options: ["px", "em", "vw", "pt"], answer: 2 },

    // CSS - HARD
    { category: "css", difficulty: "hard", type: "mcq", question: "What does 'box-sizing: border-box' do?", options: ["Adds border to box", "Includes padding and border in width", "Creates border box", "Removes box model"], answer: 1 },
    { category: "css", difficulty: "hard", type: "code", question: "What will be the final margin?", code: ".box { margin: 20px 10px; }", options: ["20px all sides", "20px top/bottom, 10px left/right", "10px all sides", "20px left/right, 10px top/bottom"], answer: 1 },
    { category: "css", difficulty: "hard", type: "mcq", question: "Which creates a CSS Grid?", options: ["display: grid", "layout: grid", "grid: true", "position: grid"], answer: 0 },
    { category: "css", difficulty: "hard", type: "mcq", question: "What is CSS specificity order (low to high)?", options: ["element, class, id", "id, class, element", "class, element, id", "element, id, class"], answer: 0 },

    // JAVASCRIPT - BASIC
    { category: "javascript", difficulty: "easy", type: "mcq", question: "Which keyword declares a variable?", options: ["var", "variable", "v", "declare"], answer: 0 },
    { category: "javascript", difficulty: "easy", type: "mcq", question: "What is the correct way to write a comment?", options: ["<!-- comment -->", "// comment", "/* comment", "# comment"], answer: 1 },
    { category: "javascript", difficulty: "easy", type: "code", question: "What will console.log output?", code: "console.log(typeof 'Hello');", options: ["string", "text", "String", "char"], answer: 0 },
    { category: "javascript", difficulty: "easy", type: "mcq", question: "Which method converts JSON to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], answer: 0 },
    { category: "javascript", difficulty: "easy", type: "code", question: "What is the result?", code: "console.log(5 + '5');", options: ["10", "55", "Error", "NaN"], answer: 1 },

    // JAVASCRIPT - MEDIUM
    { category: "javascript", difficulty: "medium", type: "mcq", question: "What is a closure?", options: ["Function inside function", "Function with access to outer scope", "Closed function", "Private function"], answer: 1 },
    { category: "javascript", difficulty: "medium", type: "code", question: "What will this output?", code: "console.log(0.1 + 0.2 === 0.3);", options: ["true", "false", "undefined", "Error"], answer: 1 },
    { category: "javascript", difficulty: "medium", type: "mcq", question: "What does 'this' refer to in arrow functions?", options: ["Current object", "Global object", "Lexical scope", "Window"], answer: 2 },
    { category: "javascript", difficulty: "medium", type: "code", question: "What is the output?", code: "let x = [1, 2, 3];\nlet y = x;\ny.push(4);\nconsole.log(x.length);", options: ["3", "4", "undefined", "Error"], answer: 1 },
    { category: "javascript", difficulty: "medium", type: "mcq", question: "Which method removes the last element from array?", options: ["pop()", "remove()", "delete()", "shift()"], answer: 0 },

    // JAVASCRIPT - HARD
    { category: "javascript", difficulty: "hard", type: "code", question: "What will be logged?", code: "console.log(1 + '1' - 1);", options: ["1", "10", "11", "NaN"], answer: 1 },
    { category: "javascript", difficulty: "hard", type: "mcq", question: "What is event bubbling?", options: ["Event moves up DOM tree", "Event creates bubbles", "Event stops propagation", "Event delays"], answer: 0 },
    { category: "javascript", difficulty: "hard", type: "code", question: "What is the output?", code: "const obj = { a: 1 };\nconst obj2 = obj;\nobj2.a = 2;\nconsole.log(obj.a);", options: ["1", "2", "undefined", "Error"], answer: 1 },
    { category: "javascript", difficulty: "hard", type: "mcq", question: "What does Promise.all() do?", options: ["Runs all promises", "Waits for all promises to resolve", "Creates promise array", "Resolves first promise"], answer: 1 },
    { category: "javascript", difficulty: "hard", type: "code", question: "What will this return?", code: "typeof null", options: ["null", "object", "undefined", "Null"], answer: 1 },

    // PHP - BASIC
    { category: "php", difficulty: "easy", type: "mcq", question: "What does PHP stand for?", options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Private Home Page", "Public Hypertext Processor"], answer: 1 },
    { category: "php", difficulty: "easy", type: "mcq", question: "Which symbol starts a PHP variable?", options: ["@", "#", "$", "&"], answer: 2 },
    { category: "php", difficulty: "easy", type: "code", question: "What will this output?", code: "<?php echo 5 + 5; ?>", options: ["5 + 5", "10", "55", "Error"], answer: 1 },
    { category: "php", difficulty: "easy", type: "mcq", question: "Which function outputs text in PHP?", options: ["print()", "echo", "write()", "output()"], answer: 1 },
    { category: "php", difficulty: "easy", type: "mcq", question: "How do you start a PHP code block?", options: ["<php>", "<?php", "<script>", "<?"], answer: 1 },

    // PHP - MEDIUM
    { category: "php", difficulty: "medium", type: "mcq", question: "Which superglobal contains form data?", options: ["$_GET", "$_POST", "$_REQUEST", "All of above"], answer: 3 },
    { category: "php", difficulty: "medium", type: "code", question: "What is the output?", code: "<?php\n$x = '10';\necho $x + 5;\n?>", options: ["105", "15", "Error", "10 + 5"], answer: 1 },
    { category: "php", difficulty: "medium", type: "mcq", question: "Which function connects to MySQL?", options: ["mysql_connect()", "mysqli_connect()", "db_connect()", "connect_mysql()"], answer: 1 },
    { category: "php", difficulty: "medium", type: "mcq", question: "What does '===' check?", options: ["Value only", "Type only", "Value and type", "Reference"], answer: 2 },

    // PHP - HARD
    { category: "php", difficulty: "hard", type: "mcq", question: "What is the difference between include and require?", options: ["No difference", "require stops on error", "include is faster", "require is deprecated"], answer: 1 },
    { category: "php", difficulty: "hard", type: "code", question: "What will this output?", code: "<?php\n$a = 1;\n$b = &$a;\n$b = 2;\necho $a;\n?>", options: ["1", "2", "Error", "undefined"], answer: 1 },
    { category: "php", difficulty: "hard", type: "mcq", question: "Which function prevents SQL injection?", options: ["mysqli_escape()", "mysqli_real_escape_string()", "sql_escape()", "escape_sql()"], answer: 1 },
    { category: "php", difficulty: "hard", type: "mcq", question: "What is a namespace in PHP?", options: ["Variable scope", "Encapsulation mechanism", "Function group", "Class type"], answer: 1 },

    // C - BASIC
    { category: "c", difficulty: "easy", type: "mcq", question: "Which header file is required for printf?", options: ["stdio.h", "stdlib.h", "string.h", "math.h"], answer: 0 },
    { category: "c", difficulty: "easy", type: "mcq", question: "What is the correct way to declare a variable?", options: ["int x;", "var x;", "declare x;", "x int;"], answer: 0 },
    { category: "c", difficulty: "easy", type: "code", question: "What will this output?", code: "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}", options: ["Hello, World!", "Hello World", "Error", "Nothing"], answer: 0 },
    { category: "c", difficulty: "easy", type: "mcq", question: "Which operator is used for assignment?", options: ["=", "==", ":=", "<-"], answer: 0 },
    { category: "c", difficulty: "easy", type: "code", question: "What is the output?", code: "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    return 0;\n}", options: ["5", "6", "Error", "Undefined"], answer: 0 },

    // C - MEDIUM
    { category: "c", difficulty: "medium", type: "mcq", question: "What does 'const' keyword do?", options: ["Defines a constant variable", "Defines a variable that cannot be changed", "Defines a variable that can only be changed once", "Defines a variable that is read-only"], answer: 1 },
    { category: "c", difficulty: "medium", type: "code", question: "What will this output?", code: "#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 3};\n    printf(\"%d\", arr[1]);\n    return 0;\n}", options: ["1", "2", "3", "Error"], answer: 1 },
    { category: "c", difficulty: "medium", type: "mcq", question: "Which function is used to allocate memory dynamically?", options: ["malloc()", "alloc()", "new()", "create()"], answer: 0 },
    { category: "c", difficulty: "medium", type: "mcq", question: "What does 'sizeof' operator return?", options: ["Size of variable in bytes", "Size of variable in bits", "Number of elements in array", "Memory address"], answer: 0 },
    { category: "c", difficulty: "medium", type: "code", question: "What is the output?", code: "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", --x);\n    return 0;\n}", options: ["5", "4", "Error", "Undefined"], answer: 1 },

    // C - HARD
    { category: "c", difficulty: "hard", type: "code", question: "What will this output?", code: "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x--);\n    return 0;\n}", options: ["5", "4", "Error", "Undefined"], answer: 0 },
    { category: "c", difficulty: "hard", type: "mcq", question: "What does 'volatile' keyword indicate?", options: ["Variable can be changed by multiple threads", "Variable is constant", "Variable is read-only", "Variable is static"], answer: 0 },
    { category: "c", difficulty: "hard", type: "code", question: "What will this output?", code: "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x++ + ++x);\n    return 0;\n}", options: ["10", "11", "12", "Undefined"], answer: 3 },
    { category: "c", difficulty: "hard", type: "mcq", question: "Which function is used to free dynamically allocated memory?", options: ["free()", "delete()", "clear()", "release()"], answer: 0 },
    { category: "c", difficulty: "hard", type: "mcq", question: "What does 'static' keyword do?", options: ["Defines a variable that retains value between function calls", "Defines a variable that is shared across all instances", "Defines a variable that is local to the file", "All of above"], answer: 3 },

    // C++ - BASIC
    { category: "cpp", difficulty: "easy", type: "mcq", question: "Which header file is required for cout?", options: ["iostream", "stdio.h", "string", "math.h"], answer: 0 },
    { category: "cpp", difficulty: "easy", type: "mcq", question: "What is the correct way to declare a variable?", options: ["int x;", "var x;", "declare x;", "x int;"], answer: 0 },
    { category: "cpp", difficulty: "easy", type: "code", question: "What will this output?", code: "#include <iostream>\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}", options: ["Hello, World!", "Hello World", "Error", "Nothing"], answer: 0 },
    { category: "cpp", difficulty: "easy", type: "mcq", question: "Which operator is used for assignment?", options: ["=", "==", ":=", "<-"], answer: 0 },
    { category: "cpp", difficulty: "easy", type: "code", question: "What is the output?", code: "#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << x++;\n    return 0;\n}", options: ["5", "6", "Error", "Undefined"], answer: 0 },

    // C++ - MEDIUM
    { category: "cpp", difficulty: "medium", type: "mcq", question: "What does 'const' keyword do?", options: ["Defines a constant variable", "Defines a variable that cannot be changed", "Defines a variable that can only be changed once", "Defines a variable that is read-only"], answer: 1 },
    { category: "cpp", difficulty: "medium", type: "code", question: "What will this output?", code: "#include <iostream>\nint main() {\n    int arr[] = {1, 2, 3};\n    std::cout << arr[1];\n    return 0;\n}", options: ["1", "2", "3", "Error"], answer: 1 },
    { category: "cpp", difficulty: "medium", type: "mcq", question: "Which function is used to allocate memory dynamically?", options: ["malloc()", "alloc()", "new()", "create()"], answer: 2 },
    { category: "cpp", difficulty: "medium", type: "mcq", question: "What does 'sizeof' operator return?", options: ["Size of variable in bytes", "Size of variable in bits", "Number of elements in array", "Memory address"], answer: 0 },
    { category: "cpp", difficulty: "medium", type: "code", question: "What is the output?", code: "#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << --x;\n    return 0;\n}", options: ["5", "4", "Error", "Undefined"], answer: 1 },

    // C++ - HARD
    { category: "cpp", difficulty: "hard", type: "code", question: "What will this output?", code: "#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << x--;\n    return 0;\n}", options: ["5", "4", "Error", "Undefined"], answer: 0 },
    { category: "cpp", difficulty: "hard", type: "mcq", question: "What does 'volatile' keyword indicate?", options: ["Variable can be changed by multiple threads", "Variable is constant", "Variable is read-only", "Variable is static"], answer: 0 },
    { category: "cpp", difficulty: "hard", type: "code", question: "What will this output?", code: "#include <iostream>\nint main() {\n    int x = 5;\n    std::cout    << x++ + ++x;\n    return 0;\n}", options: ["10", "11", "12", "Undefined"], answer: 3 },
    { category: "cpp", difficulty: "hard", type: "mcq", question: "Which function is used to free dynamically allocated memory?", options: ["free()", "delete()", "clear()", "release()"], answer: 1 },
    { category: "cpp", difficulty: "hard", type: "mcq", question: "What does 'static' keyword do?", options: ["Defines a variable that retains value between function calls", "Defines a variable that is shared across all instances", "Defines a variable that is local to the file", "All of above"], answer: 3 },

    // Java - BASIC
    { category: "java", difficulty: "easy", type: "mcq", question: "Which keyword is used to define a class?", options: ["class", "Class", "define", "object"], answer: 0 },
    { category: "java", difficulty: "easy", type: "mcq", question: "What is the correct way to declare a variable?", options: ["int x;", "var x;", "declare x;", "x int;"], answer: 0 },
    { category: "java", difficulty: "easy", type: "code", question: "What will this output?", code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}", options: ["Hello, World!", "Hello World", "Error", "Nothing"], answer: 0 },
    { category: "java", difficulty: "easy", type: "mcq", question: "Which operator is used for assignment?", options: ["=", "==", ":=", "<-"], answer: 0 },
    { category: "java", difficulty: "easy", type: "code", question: "What is the output?", code: "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n    }\n}", options: ["5", "6", "Error", "Undefined"], answer: 0 },

    // Java - MEDIUM
    { category: "java", difficulty: "medium", type: "mcq", question: "What does 'static' keyword do?", options: ["Defines a variable that retains value between function calls", "Defines a variable that is shared across all instances", "Defines a variable that is local to the file", "All of above"], answer: 1 },
    { category: "java", difficulty: "medium", type: "code", question: "What will this output?", code: "public class Main {\n    public static void main(String[] args) {\n        int arr[] = {1, 2, 3};\n        System.out.println(arr[1]);\n    }\n}", options: ["1", "2", "3", "Error"], answer: 1 },
    { category: "java", difficulty: "medium", type: "mcq", question: "Which keyword is used for inheritance?", options: ["extends", "implements", "inherits", "virtual"], answer: 0 },
    { category: "java", difficulty: "medium", type: "mcq", question: "What does 'final' keyword do?", options: ["Prevents inheritance", "Prevents modification", "Prevents both", "None of above"], answer: 2 },
    { category: "java", difficulty: "medium", type: "code", question: "What is the output?", code: "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(--x);\n    }\n}", options: ["5", "4", "Error", "Undefined"], answer: 1 },

    // Java - HARD
    { category: "java", difficulty: "hard", type: "code", question: "What will this output?", code: "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x--);\n    }\n}", options: ["5", "4", "Error", "Undefined"], answer: 0 },
    { category: "java", difficulty: "hard", type: "mcq", question: "What does 'volatile' keyword indicate?", options: ["Variable can be changed by multiple threads", "Variable is constant", "Variable is read-only", "Variable is static"], answer: 0 },
    { category: "java", difficulty: "hard", type: "code", question: "What will this output?", code: "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++ + ++x);\n    }\n}", options: ["10", "11", "12", "Undefined"], answer: 3 },
    { category: "java", difficulty: "hard", type: "mcq", question: "Which keyword is used for exception handling?", options: ["try", "catch", "throw", "All of above"], answer: 3 },
    { category: "java", difficulty: "hard", type: "mcq", question: "What is the use of 'synchronized' keyword?", options: ["Thread safety", "Memory management", "Exception handling", "None of above"], answer: 0 },

    //Python - BASIC
    { category: "python", difficulty: "easy", type: "mcq", question: "Which keyword is used to define a function?", options: ["def", "func", "function", "define"], answer: 0 },
    { category: "python", difficulty: "easy", type: "mcq", question: "What is the correct way to declare a variable?", options: ["var x =", "x =", "int x =", "declare x ="], answer: 1 },
    { category: "python", difficulty: "easy", type: "code", question: "What will this output?", code: "print(\"Hello, World!\")", options: ["Hello, World!", "Hello World", "Error", "Nothing"], answer: 0 },
    { category: "python", difficulty: "easy", type: "mcq", question: "Which operator is used for assignment?", options: ["=", "==", ":=", "<-"], answer: 0 },
    { category: "python", difficulty: "easy", type: "code", question: "What is the output?", code: "x = 5\nprint(x++)", options: ["5", "6", "Error", "Undefined"], answer: 2 },

    // Python - MEDIUM
    { category: "python", difficulty: "medium", type: "mcq", question: "What does 'self' represent in Python?", options: ["Current instance", "Parent class", "Static method", "None of above"], answer: 0 },
    { category: "python", difficulty: "medium", type: "code", question: "What will this output?", code: "arr = [1, 2, 3]\nprint(arr[1])", options: ["1", "2", "3", "Error"], answer: 1 },
    { category: "python", difficulty: "medium", type: "mcq", question: "Which keyword is used for exception handling?", options: ["try", "except", "raise", "All of above"], answer: 3 },
    { category: "python", difficulty: "medium", type: "mcq", question: "What does 'len()' function do?", options: ["Returns length of object", "Returns size of object", "Returns number of elements", "All of above"], answer: 0 },
    { category: "python", difficulty: "medium", type: "code", question: "What is the output?", code: "x = 5\nprint(--x)", options: ["5", "4", "Error", "Undefined"], answer: 2 },

    // Python - HARD
    { category: "python", difficulty: "hard", type: "code", question: "What will this output?", code: "x = 5\nprint(x--)", options: ["5", "4", "Error", "Undefined"], answer: 2 },
    { category: "python", difficulty: "hard", type: "mcq", question: "What does 'global' keyword do?", options: ["Defines a global variable", "Allows modification of global variable inside function", "Creates a global function", "None of above"], answer: 1 },
    { category: "python", difficulty: "hard", type: "code", question: "What will this output?", code: "x = 5\nprint(x++ + ++x)", options: ["10", "11", "12", "Undefined"], answer: 2 },
    { category: "python", difficulty: "hard", type: "mcq", question: "Which function is used to create a new thread?", options: ["threading.Thread()", "thread.Thread()", "new Thread()", "createThread()"], answer: 0 },
    { category: "python", difficulty: "hard", type: "mcq", question: "What does 'with' statement do?", options: ["Defines a context manager", "Handles exceptions", "Creates a block of code", "None of above"], answer: 0 },  
];

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let correct = 0;
let answered = 0;
let currentFilter = 'all';
let currentDifficulty = 'all';
let timerEnabled = false;
let timerInterval = null;
let elapsedTime = 0;
let bookmarkedQuestions = [];

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

let shuffledQuestions = shuffleArray([...questions]);

function startTimer() {
    if (timerEnabled && !timerInterval) {
        timerInterval = setInterval(() => {
            elapsedTime++;
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = 
        `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`;
}

function loadQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
        showSummary();
        return;
    }

    const q = shuffledQuestions[currentQuestion];
    document.getElementById('category').textContent = q.category.toUpperCase();
    document.getElementById('category').className = `category ${q.category}`;
    document.getElementById('difficulty').textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    document.getElementById('difficulty').className = `difficulty ${q.difficulty}`;
    document.getElementById('question-number').textContent = `#${currentQuestion + 1}`;
    document.getElementById('question-text').textContent = q.question;
    
    const contentDiv = document.getElementById('question-content');
    contentDiv.style.display = q.code ? 'block' : 'none';
    contentDiv.textContent = q.code || '';
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = opt;
        div.onclick = () => selectAnswer(idx);
        optionsContainer.appendChild(div);
    });
    
    document.getElementById('result-message').className = '';
    document.getElementById('result-message').style.display = 'none';
    selectedAnswer = null;
    updateProgress();
    
    const bookmarkBtn = document.getElementById('bookmark-btn');
    bookmarkBtn.textContent = bookmarkedQuestions.includes(currentQuestion) ? '⭐ Bookmarked' : '🔖 Bookmark';
}

function selectAnswer(idx) {
    selectedAnswer = idx;
    document.querySelectorAll('.option').forEach((el, i) => {
        el.classList.toggle('selected', i === idx);
    });
}

function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }
    
    const q = shuffledQuestions[currentQuestion];
    const resultMsg = document.getElementById('result-message');
    const options = document.querySelectorAll('.option');
    
    answered++;
    
    if (selectedAnswer === q.answer) {
        correct++;
        score += q.difficulty === 'easy' ? 10 : q.difficulty === 'medium' ? 20 : 30;
        resultMsg.textContent = '✅ Correct! Well done!';
        resultMsg.className = 'correct show';
        options[selectedAnswer].classList.add('correct');
        
        // Track language progress
        const langKey = `${q.category}_solved`;
        const currentSolved = parseInt(localStorage.getItem(langKey)) || 0;
        localStorage.setItem(langKey, currentSolved + 1);
    } else {
        resultMsg.textContent = `❌ Incorrect! Correct answer: ${q.options[q.answer]}`;
        resultMsg.className = 'incorrect show';
        options[selectedAnswer].classList.add('incorrect');
        options[q.answer].classList.add('correct');
    }
    
    updateStats();
    saveProgress();
    document.getElementById('submit-btn').disabled = true;
}

function nextQuestion() {
    document.getElementById('submit-btn').disabled = false;
    currentQuestion++;
    
    if (currentQuestion >= shuffledQuestions.length) {
        showSummary();
        return;
    }
    
    loadQuestion();
}

function showSummary() {
    stopTimer();
    document.querySelector('.question-card').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.querySelector('.controls').style.display = 'none';
    document.querySelector('.progress-section').style.display = 'none';
    
    const summarySection = document.getElementById('quiz-summary');
    summarySection.style.display = 'block';
    
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-correct').textContent = `${correct}/${answered}`;
    document.getElementById('final-percentage').textContent = percentage + '%';
    document.getElementById('final-time').textContent = document.getElementById('timer').textContent;
    
    saveQuizHistory();
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    correct = 0;
    answered = 0;
    elapsedTime = 0;
    bookmarkedQuestions = [];
    stopTimer();
    shuffledQuestions = shuffleArray([...questions]);
    
    document.querySelector('.question-card').style.display = 'block';
    document.querySelector('.filters').style.display = 'flex';
    document.querySelector('.controls').style.display = 'flex';
    document.querySelector('.progress-section').style.display = 'block';
    document.getElementById('quiz-summary').style.display = 'none';
    
    updateStats();
    updateTimerDisplay();
    loadQuestion();
    
    if (timerEnabled) startTimer();
}

function toggleBookmark() {
    const index = bookmarkedQuestions.indexOf(currentQuestion);
    if (index > -1) {
        bookmarkedQuestions.splice(index, 1);
    } else {
        bookmarkedQuestions.push(currentQuestion);
    }
    loadQuestion();
}

function filterByDifficulty(difficulty) {
    currentDifficulty = difficulty;
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.diff === difficulty);
    });
    
    let filtered = [...questions];
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(q => q.category === currentFilter);
    }
    
    if (difficulty !== 'all') {
        filtered = filtered.filter(q => q.difficulty === difficulty);
    }
    
    if (filtered.length === 0) {
        alert('No questions available for this filter combination!');
        return;
    }
    
    shuffledQuestions = shuffleArray(filtered);
    currentQuestion = 0;
    score = 0;
    correct = 0;
    answered = 0;
    updateStats();
    loadQuestion();
}

function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('correct').textContent = correct;
    document.getElementById('total-answered').textContent = answered;
}

function filterQuestions(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    
    let filtered = [...questions];
    
    if (category !== 'all') {
        filtered = filtered.filter(q => q.category === category);
    }
    
    if (currentDifficulty !== 'all') {
        filtered = filtered.filter(q => q.difficulty === currentDifficulty);
    }
    
    if (filtered.length === 0) {
        alert('No questions available for this filter combination!');
        return;
    }
    
    shuffledQuestions = shuffleArray(filtered);
    currentQuestion = 0;
    score = 0;
    correct = 0;
    answered = 0;
    updateStats();
    loadQuestion();
}

document.getElementById('submit-btn').addEventListener('click', submitAnswer);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('bookmark-btn').addEventListener('click', toggleBookmark);
document.getElementById('reset-btn').addEventListener('click', resetQuiz);
document.getElementById('restart-btn').addEventListener('click', resetQuiz);

document.getElementById('timer-toggle').addEventListener('change', function() {
    timerEnabled = this.checked;
    if (timerEnabled) {
        startTimer();
    } else {
        stopTimer();
    }
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterQuestions(btn.dataset.filter));
});

document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => filterByDifficulty(btn.dataset.diff));
});

function saveProgress() {
    localStorage.setItem('score', score);
    localStorage.setItem('correctAnswers', correct);
    localStorage.setItem('totalQuestions', answered);
    updateStreak();
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastActive = localStorage.getItem('lastActiveDate');
    const currentStreak = parseInt(localStorage.getItem('streak')) || 0;
    
    // Only update if it's a different day
    if (lastActive !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        // Check if last active was yesterday (consecutive day)
        if (lastActive === yesterday.toDateString()) {
            localStorage.setItem('streak', currentStreak + 1);
        } else if (!lastActive) {
            // First time user
            localStorage.setItem('streak', 1);
        } else {
            // Streak broken, reset to 1
            localStorage.setItem('streak', 1);
        }
        
        localStorage.setItem('lastActiveDate', today);
    }
    // If same day, do nothing - streak already counted
}

function saveQuizHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    history.push({
        category: currentFilter === 'all' ? 'All Categories' : currentFilter.toUpperCase(),
        result: `${correct}/${answered} correct`,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

// Initialize quiz
if (questions.length > 0) {
    loadQuestion();
    updateStats();
} else {
    console.error('No questions loaded!');
}
