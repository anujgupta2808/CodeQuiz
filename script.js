const challenges = [
    // MCQ QUESTIONS
    { title: "What is Time Complexity?", difficulty: "easy", type: "mcq", description: "What is the time complexity of binary search algorithm?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: 1, source: "Custom", link: "#" },
    { title: "Array vs Linked List", difficulty: "easy", type: "mcq", description: "Which data structure provides O(1) access time by index?", options: ["Linked List", "Stack", "Array", "Queue"], answer: 2, source: "Custom", link: "#" },
    { title: "Stack Operations", difficulty: "easy", type: "mcq", description: "Which principle does a Stack follow?", options: ["FIFO", "LIFO", "Random Access", "Priority Based"], answer: 1, source: "Custom", link: "#" },
    { title: "Hash Table Complexity", difficulty: "medium", type: "mcq", description: "What is the average time complexity for search in a hash table?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], answer: 2, source: "Custom", link: "#" },
    { title: "Tree Traversal", difficulty: "medium", type: "mcq", description: "In which tree traversal is the root visited first?", options: ["Inorder", "Preorder", "Postorder", "Level Order"], answer: 1, source: "Custom", link: "#" },
    { title: "Sorting Algorithm", difficulty: "medium", type: "mcq", description: "Which sorting algorithm has O(n log n) worst-case time complexity?", options: ["Quick Sort", "Bubble Sort", "Merge Sort", "Selection Sort"], answer: 2, source: "Custom", link: "#" },
    { title: "Graph Representation", difficulty: "medium", type: "mcq", description: "Which is more space-efficient for sparse graphs?", options: ["Adjacency Matrix", "Adjacency List", "Edge List", "All are same"], answer: 1, source: "Custom", link: "#" },
    { title: "Dynamic Programming", difficulty: "hard", type: "mcq", description: "What technique does dynamic programming use to optimize?", options: ["Divide and Conquer", "Greedy Approach", "Memoization", "Backtracking"], answer: 2, source: "Custom", link: "#" },
    { title: "BST Property", difficulty: "medium", type: "mcq", description: "In a Binary Search Tree, left child is always:", options: ["Greater than parent", "Less than parent", "Equal to parent", "Random"], answer: 1, source: "Custom", link: "#" },
    { title: "Recursion Base Case", difficulty: "easy", type: "mcq", description: "What happens if recursion has no base case?", options: ["Compiles fine", "Stack Overflow", "Syntax Error", "Nothing"], answer: 1, source: "Custom", link: "#" },

    // CODING QUESTIONS
    { title: "Two Sum", difficulty: "easy", type: "code", description: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.", source: "LeetCode", link: "https://leetcode.com/problems/two-sum/" },
    { title: "Reverse String", difficulty: "easy", description: "Write a function that reverses a string. The input string is given as an array of characters.", source: "LeetCode", link: "https://leetcode.com/problems/reverse-string/" },
    { title: "Valid Palindrome", difficulty: "easy", description: "Given a string, determine if it is a palindrome, considering only alphanumeric characters.", source: "LeetCode", link: "https://leetcode.com/problems/valid-palindrome/" },
    { title: "Contains Duplicate", difficulty: "easy", description: "Given an integer array, return true if any value appears at least twice.", source: "LeetCode", link: "https://leetcode.com/problems/contains-duplicate/" },
    { title: "Maximum Subarray", difficulty: "easy", description: "Find the contiguous subarray with the largest sum.", source: "LeetCode", link: "https://leetcode.com/problems/maximum-subarray/" },
    { title: "Move Zeroes", difficulty: "easy", description: "Move all 0's to the end while maintaining relative order of non-zero elements.", source: "LeetCode", link: "https://leetcode.com/problems/move-zeroes/" },
    { title: "Best Time to Buy and Sell Stock", difficulty: "easy", description: "Find the maximum profit from buying and selling a stock once.", source: "LeetCode", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
    { title: "Valid Anagram", difficulty: "easy", description: "Given two strings s and t, return true if t is an anagram of s.", source: "LeetCode", link: "https://leetcode.com/problems/valid-anagram/" },
    { title: "Fizz Buzz", difficulty: "easy", description: "Return a string array where multiples of 3 are 'Fizz', 5 are 'Buzz', and both are 'FizzBuzz'.", source: "LeetCode", link: "https://leetcode.com/problems/fizz-buzz/" },
    { title: "Single Number", difficulty: "easy", description: "Find the element that appears once while every other element appears twice.", source: "LeetCode", link: "https://leetcode.com/problems/single-number/" },

    // BASIC - Linked Lists & Stacks
    { title: "Reverse Linked List", difficulty: "easy", description: "Reverse a singly linked list.", source: "LeetCode", link: "https://leetcode.com/problems/reverse-linked-list/" },
    { title: "Merge Two Sorted Lists", difficulty: "easy", description: "Merge two sorted linked lists and return it as a sorted list.", source: "LeetCode", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
    { title: "Valid Parentheses", difficulty: "easy", description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.", source: "LeetCode", link: "https://leetcode.com/problems/valid-parentheses/" },
    { title: "Linked List Cycle", difficulty: "easy", description: "Determine if a linked list has a cycle in it.", source: "LeetCode", link: "https://leetcode.com/problems/linked-list-cycle/" },
    { title: "Implement Queue using Stacks", difficulty: "easy", description: "Implement a FIFO queue using only two stacks.", source: "LeetCode", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },

    // BASIC - Trees & Searching
    { title: "Binary Search", difficulty: "easy", description: "Given a sorted array and a target value, return the index if found or -1.", source: "LeetCode", link: "https://leetcode.com/problems/binary-search/" },
    { title: "Maximum Depth of Binary Tree", difficulty: "easy", description: "Find the maximum depth of a binary tree.", source: "LeetCode", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    { title: "Invert Binary Tree", difficulty: "easy", description: "Invert a binary tree (swap left and right children recursively).", source: "LeetCode", link: "https://leetcode.com/problems/invert-binary-tree/" },
    { title: "Symmetric Tree", difficulty: "easy", description: "Check whether a binary tree is a mirror of itself.", source: "LeetCode", link: "https://leetcode.com/problems/symmetric-tree/" },
    { title: "Path Sum", difficulty: "easy", description: "Determine if the tree has a root-to-leaf path with a given sum.", source: "LeetCode", link: "https://leetcode.com/problems/path-sum/" },

    // INTERMEDIATE - Arrays & Strings
    { title: "3Sum", difficulty: "medium", description: "Find all unique triplets in the array which gives the sum of zero.", source: "LeetCode", link: "https://leetcode.com/problems/3sum/" },
    { title: "Longest Substring Without Repeating", difficulty: "medium", description: "Find the length of the longest substring without repeating characters.", source: "LeetCode", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { title: "Container With Most Water", difficulty: "medium", description: "Find two lines that together with x-axis form a container with most water.", source: "LeetCode", link: "https://leetcode.com/problems/container-with-most-water/" },
    { title: "Group Anagrams", difficulty: "medium", description: "Group anagrams together from an array of strings.", source: "LeetCode", link: "https://leetcode.com/problems/group-anagrams/" },
    { title: "Longest Palindromic Substring", difficulty: "medium", description: "Find the longest palindromic substring in a string.", source: "LeetCode", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
    { title: "Product of Array Except Self", difficulty: "medium", description: "Return an array where each element is the product of all elements except itself.", source: "LeetCode", link: "https://leetcode.com/problems/product-of-array-except-self/" },
    { title: "Rotate Image", difficulty: "medium", description: "Rotate an n x n 2D matrix by 90 degrees clockwise.", source: "LeetCode", link: "https://leetcode.com/problems/rotate-image/" },
    { title: "Spiral Matrix", difficulty: "medium", description: "Return all elements of the matrix in spiral order.", source: "LeetCode", link: "https://leetcode.com/problems/spiral-matrix/" },

    // INTERMEDIATE - Linked Lists & Trees
    { title: "Add Two Numbers", difficulty: "medium", description: "Add two numbers represented by linked lists where digits are stored in reverse order.", source: "LeetCode", link: "https://leetcode.com/problems/add-two-numbers/" },
    { title: "Remove Nth Node From End", difficulty: "medium", description: "Remove the nth node from the end of a linked list.", source: "LeetCode", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { title: "Binary Tree Level Order Traversal", difficulty: "medium", description: "Return the level order traversal of a binary tree's nodes.", source: "LeetCode", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { title: "Validate Binary Search Tree", difficulty: "medium", description: "Determine if a binary tree is a valid binary search tree.", source: "LeetCode", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
    { title: "Lowest Common Ancestor", difficulty: "medium", description: "Find the lowest common ancestor of two nodes in a binary search tree.", source: "LeetCode", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
    { title: "Kth Smallest Element in BST", difficulty: "medium", description: "Find the kth smallest element in a binary search tree.", source: "LeetCode", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },

    // INTERMEDIATE - Dynamic Programming
    { title: "Climbing Stairs", difficulty: "easy", description: "Calculate how many distinct ways you can climb to the top of n stairs.", source: "LeetCode", link: "https://leetcode.com/problems/climbing-stairs/" },
    { title: "House Robber", difficulty: "medium", description: "Maximize money you can rob without robbing adjacent houses.", source: "LeetCode", link: "https://leetcode.com/problems/house-robber/" },
    { title: "Coin Change", difficulty: "medium", description: "Find the minimum number of coins needed to make up a given amount.", source: "LeetCode", link: "https://leetcode.com/problems/coin-change/" },
    { title: "Longest Increasing Subsequence", difficulty: "medium", description: "Find the length of the longest strictly increasing subsequence.", source: "LeetCode", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
    { title: "Unique Paths", difficulty: "medium", description: "Find number of unique paths from top-left to bottom-right in a grid.", source: "LeetCode", link: "https://leetcode.com/problems/unique-paths/" },
    { title: "Word Break", difficulty: "medium", description: "Determine if a string can be segmented into words from a dictionary.", source: "LeetCode", link: "https://leetcode.com/problems/word-break/" },

    // INTERMEDIATE - Graphs & BFS/DFS
    { title: "Number of Islands", difficulty: "medium", description: "Count the number of islands in a 2D grid.", source: "LeetCode", link: "https://leetcode.com/problems/number-of-islands/" },
    { title: "Clone Graph", difficulty: "medium", description: "Return a deep copy of an undirected graph.", source: "LeetCode", link: "https://leetcode.com/problems/clone-graph/" },
    { title: "Course Schedule", difficulty: "medium", description: "Determine if you can finish all courses given prerequisites.", source: "LeetCode", link: "https://leetcode.com/problems/course-schedule/" },
    { title: "Flood Fill", difficulty: "easy", description: "Perform a flood fill on an image starting from pixel (sr, sc).", source: "LeetCode", link: "https://leetcode.com/problems/flood-fill/" },
    { title: "Pacific Atlantic Water Flow", difficulty: "medium", description: "Find cells where water can flow to both Pacific and Atlantic oceans.", source: "LeetCode", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },

    // ADVANCED - Hard Problems
    { title: "Median of Two Sorted Arrays", difficulty: "hard", description: "Find the median of two sorted arrays with O(log(m+n)) complexity.", source: "LeetCode", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { title: "Trapping Rain Water", difficulty: "hard", description: "Calculate how much water can be trapped after raining.", source: "LeetCode", link: "https://leetcode.com/problems/trapping-rain-water/" },
    { title: "Merge K Sorted Lists", difficulty: "hard", description: "Merge k sorted linked lists into one sorted list.", source: "LeetCode", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
    { title: "Regular Expression Matching", difficulty: "hard", description: "Implement regular expression matching with '.' and '*'.", source: "LeetCode", link: "https://leetcode.com/problems/regular-expression-matching/" },
    { title: "Wildcard Matching", difficulty: "hard", description: "Implement wildcard pattern matching with '?' and '*'.", source: "LeetCode", link: "https://leetcode.com/problems/wildcard-matching/" },
    { title: "Edit Distance", difficulty: "hard", description: "Find minimum operations to convert one string to another.", source: "LeetCode", link: "https://leetcode.com/problems/edit-distance/" },
    { title: "Longest Valid Parentheses", difficulty: "hard", description: "Find the length of the longest valid parentheses substring.", source: "LeetCode", link: "https://leetcode.com/problems/longest-valid-parentheses/" },
    { title: "Word Ladder", difficulty: "hard", description: "Find the shortest transformation sequence from beginWord to endWord.", source: "LeetCode", link: "https://leetcode.com/problems/word-ladder/" },
    { title: "Sliding Window Maximum", difficulty: "hard", description: "Find the maximum value in each sliding window of size k.", source: "LeetCode", link: "https://leetcode.com/problems/sliding-window-maximum/" },
    { title: "Serialize and Deserialize Binary Tree", difficulty: "hard", description: "Design an algorithm to serialize and deserialize a binary tree.", source: "LeetCode", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
    { title: "Word Search II", difficulty: "hard", description: "Find all words from a dictionary that exist in a 2D board.", source: "LeetCode", link: "https://leetcode.com/problems/word-search-ii/" },
    { title: "Alien Dictionary", difficulty: "hard", type: "code", description: "Derive the order of letters in an alien language from a sorted dictionary.", source: "HackerRank", link: "https://www.hackerrank.com/challenges/alien-languages/" },

    // MORE MCQ QUESTIONS
    { title: "Big O Notation", difficulty: "easy", type: "mcq", description: "What does O(1) represent?", options: ["Linear time", "Constant time", "Logarithmic time", "Quadratic time"], answer: 1, source: "Custom", link: "#" },
    { title: "Queue Operations", difficulty: "easy", type: "mcq", description: "Which operation is NOT valid for a Queue?", options: ["Enqueue", "Dequeue", "Push", "Peek"], answer: 2, source: "Custom", link: "#" },
    { title: "Heap Property", difficulty: "medium", type: "mcq", description: "In a Max Heap, the parent node is:", options: ["Smaller than children", "Greater than children", "Equal to children", "Random"], answer: 1, source: "Custom", link: "#" },
    { title: "DFS vs BFS", difficulty: "medium", type: "mcq", description: "Which uses a Queue for implementation?", options: ["DFS", "BFS", "Both", "Neither"], answer: 1, source: "Custom", link: "#" },
    { title: "Linked List Advantage", difficulty: "easy", type: "mcq", description: "What is the main advantage of Linked List over Array?", options: ["Faster access", "Dynamic size", "Less memory", "Sorted data"], answer: 1, source: "Custom", link: "#" }
];

// Add type: "code" to all existing coding challenges
challenges.forEach(c => { if (!c.type) c.type = "code"; });

let userData = JSON.parse(localStorage.getItem('codingChallenges')) || {
    streak: 0,
    totalSolved: 0,
    lastSolvedDate: null,
    history: []
};

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getTodayChallenge() {
    const dayIndex = getDayOfYear() % challenges.length;
    return challenges[dayIndex];
}

function isSolvedToday() {
    const today = new Date().toDateString();
    return userData.lastSolvedDate === today;
}

function updateStats() {
    document.getElementById('streak').textContent = userData.streak;
    document.getElementById('total').textContent = userData.totalSolved;
    document.getElementById('today-status').textContent = isSolvedToday() ? '✅' : '❌';
}

let selectedOption = null;

function displayChallenge() {
    const challenge = getTodayChallenge();
    document.getElementById('challenge-title').textContent = challenge.title;
    document.getElementById('challenge-description').textContent = challenge.description;
    document.getElementById('challenge-link').href = challenge.link;
    document.getElementById('challenge-link').textContent = `${challenge.source} Problem`;
    
    const difficultyEl = document.getElementById('difficulty');
    difficultyEl.textContent = challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1);
    difficultyEl.className = `difficulty ${challenge.difficulty}`;

    const mcqOptions = document.getElementById('mcq-options');
    const codeSolution = document.getElementById('code-solution');
    const mcqSolution = document.getElementById('mcq-solution');
    
    if (challenge.type === 'mcq') {
        mcqOptions.innerHTML = '';
        challenge.options.forEach((opt, idx) => {
            const div = document.createElement('div');
            div.className = 'mcq-option';
            div.textContent = opt;
            div.onclick = () => selectOption(idx);
            mcqOptions.appendChild(div);
        });
        mcqOptions.style.display = 'block';
        codeSolution.style.display = 'none';
        mcqSolution.style.display = 'block';
        document.getElementById('mcq-result').innerHTML = '';
        selectedOption = null;
    } else {
        mcqOptions.style.display = 'none';
        codeSolution.style.display = 'block';
        mcqSolution.style.display = 'none';
    }
}

function selectOption(idx) {
    document.querySelectorAll('.mcq-option').forEach((el, i) => {
        el.classList.toggle('selected', i === idx);
    });
    selectedOption = idx;
}

function displayHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    userData.history.slice(-5).reverse().forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <h4>${item.title}</h4>
            <small>${item.date}</small>
        `;
        historyList.appendChild(div);
    });
}

function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (userData.lastSolvedDate === yesterday) {
        userData.streak++;
    } else if (userData.lastSolvedDate !== today) {
        userData.streak = 1;
    }
}

function submitSolution() {
    const solution = document.getElementById('solution-code').value.trim();
    
    if (!solution) {
        alert('Please paste your solution before submitting!');
        return;
    }
    
    if (isSolvedToday()) {
        alert('You already solved today\'s challenge!');
        return;
    }
    
    const challenge = getTodayChallenge();
    const today = new Date().toDateString();
    
    updateStreak();
    userData.totalSolved++;
    userData.lastSolvedDate = today;
    userData.history.push({
        title: challenge.title,
        date: today,
        solution: solution
    });
    
    localStorage.setItem('codingChallenges', JSON.stringify(userData));
    
    updateStats();
    displayHistory();
    document.getElementById('solution-code').value = '';
    
    alert('🎉 Great job! Challenge marked as solved. Don\'t forget to commit to GitHub!');
}

function submitMCQ() {
    if (selectedOption === null) {
        alert('Please select an answer!');
        return;
    }
    
    if (isSolvedToday()) {
        alert('You already solved today\'s challenge!');
        return;
    }
    
    const challenge = getTodayChallenge();
    const resultDiv = document.getElementById('mcq-result');
    
    if (selectedOption === challenge.answer) {
        resultDiv.textContent = '✅ Correct! Well done!';
        resultDiv.className = 'correct';
        
        const today = new Date().toDateString();
        updateStreak();
        userData.totalSolved++;
        userData.lastSolvedDate = today;
        userData.history.push({ title: challenge.title, date: today });
        localStorage.setItem('codingChallenges', JSON.stringify(userData));
        updateStats();
        displayHistory();
    } else {
        resultDiv.textContent = `❌ Incorrect. Correct answer: ${challenge.options[challenge.answer]}`;
        resultDiv.className = 'incorrect';
    }
}

function skipChallenge() {
    if (confirm('Are you sure you want to skip today\'s challenge? Your streak will reset.')) {
        userData.streak = 0;
        localStorage.setItem('codingChallenges', JSON.stringify(userData));
        updateStats();
    }
}

document.getElementById('submit-btn').addEventListener('click', submitSolution);
document.getElementById('skip-btn').addEventListener('click', skipChallenge);
document.getElementById('submit-mcq-btn').addEventListener('click', submitMCQ);
document.getElementById('skip-btn-mcq').addEventListener('click', skipChallenge);

displayChallenge();
updateStats();
displayHistory();
