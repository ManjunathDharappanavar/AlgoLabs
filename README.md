# <div align="center">🧮 AlgoLabs</div>

<div align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Status">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
  <h3>🎯 An interactive web application for running classic algorithms instantly</h3>
  <p><em>Explore • Learn • Compute • Visualize algorithms in real-time</em></p>
</div>

<br>

---

## 📋 Table of Contents

<details>
<summary>Click to expand</summary>

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [💡 Available Algorithms](#-available-algorithms)
- [🖥️ Usage](#️-usage)
- [🏗️ Project Structure](#️-project-structure)
- [🎨 Design Features](#-design-features)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Interactive Interface**
- Clean, intuitive modal-based design
- Responsive layout for all devices
- Elegant slateblue theme with smooth animations

</td>
<td width="50%">

### ⚡ **Instant Computation**
- Real-time algorithm execution
- Input validation and error handling
- Immediate results display

</td>
</tr>
<tr>
<td width="50%">

### 🧮 **Educational Value**
- Classic computer science algorithms
- Perfect for learning and demonstration
- Clear implementation examples

</td>
<td width="50%">

### 📱 **Mobile Ready**
- Fully responsive design
- Touch-friendly interface
- Optimized for small screens

</td>
</tr>
</table>

---

## 🚀 Quick Start

<div align="center">
<img src="https://via.placeholder.com/600x300/6A5ACD/FFFFFF?text=AlgoLabs+Interface" alt="AlgoLabs Interface" width="100%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</div>

<br>

Get AlgoLabs running locally in seconds:

```bash
# Clone the repository
git clone https://github.com/ManjunathDharappanavar/AlgoLabs.git

# Navigate to project directory
cd AlgoLabs

# Open in your browser
# Simply open index.html in any modern web browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

<div align="center">
  <a href="https://manjunathdharappanavar.github.io/AlgoLabs/">
    <img src="https://img.shields.io/badge/🔗%20Live%20Demo-Try%20It%20Now-success?style=for-the-badge" alt="Live Demo">
  </a>
</div>

---

## 💡 Available Algorithms

The application currently supports four fundamental algorithms:

### 🔄 **Reverse a Number**
Reverses the digits of any integer input
```
Input: 12345
Output: 54321
```

### 🔢 **Factorial Calculation**
Computes the factorial of a given number
```
Input: 5
Output: 120 (5! = 5 × 4 × 3 × 2 × 1)
```

### 🌀 **Fibonacci Sequence**
Generates the Fibonacci sequence up to n terms
```
Input: 7
Output: 0, 1, 1, 2, 3, 5, 8
```

### 🔍 **Prime Checker**
Determines whether a number is prime or composite
```
Input: 17
Output: Prime
```

---

## 🖥️ Usage

### Basic Operation

1. **Launch the application** by opening `index.html` in your web browser
2. **Navigate to the Algorithms section** using the "Start Exploring" button or menu
3. **Select an algorithm** by clicking on any algorithm card
4. **Enter your input** in the modal dialog that appears
5. **Click "Run"** to execute the algorithm and view results

### Interface Elements

<details>
<summary><b>🎛️ User Interface Components</b></summary>

**Hero Section:**
- Welcome message and project description
- Call-to-action button for quick navigation
- Responsive hamburger menu for mobile devices

**Algorithm Grid:**
- Four algorithm cards with clear labeling
- Hover effects and interactive elements
- Modal-based input system for clean user experience

**Modal Dialog:**
- Input field with number validation
- Run button for algorithm execution
- Results display area with clear formatting
- Close button for easy navigation

</details>

### Input Validation

The application includes robust input validation to ensure reliable algorithm execution. All inputs are validated as numeric values, and appropriate error messages are displayed for invalid entries.

---

## 🏗️ Project Structure

```
AlgoLabs/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

### Technology Stack

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white" alt="Google Fonts">
</div>

---

## 🎨 Design Features

### Visual Design Elements

**Color Scheme:**
- Primary: Slateblue (#6A5ACD) for headers and interactive elements
- Secondary: Alice Blue for text and contrasts
- Accent: Pink for call-to-action buttons

**Typography:**
- Font Family: Libertinus Mono for a clean, technical appearance
- Google Material Symbols for consistent iconography
- Responsive font sizing for optimal readability

### Interactive Features

**Modal System:**
- Overlay-based dialog boxes for algorithm interaction
- Smooth transitions and professional styling
- Accessible close mechanisms

**Responsive Navigation:**
- Hover-activated menu system
- Mobile-optimized hamburger menu
- Smooth scrolling between sections

---

## 📱 Responsive Design

The application is fully responsive and optimized for various screen sizes:

**Desktop Experience:**
- Full-width hero section with large typography
- Grid-based algorithm layout with adequate spacing
- Hover effects and smooth transitions

**Mobile Experience:**
- Stacked algorithm cards for easy touch interaction
- Scaled navigation elements for finger-friendly use
- Optimized modal sizing for smaller screens

**Media Query Breakpoints:**
- Mobile devices: 480px and below
- Automatic layout adjustments for optimal usability

---

## 🤝 Contributing

We welcome contributions to enhance AlgoLabs with additional algorithms and features. Here's how you can contribute:

### Development Guidelines

1. **Fork** the repository to your GitHub account
2. **Clone** your fork locally: `git clone https://github.com/yourusername/AlgoLabs.git`
3. **Create** a feature branch: `git checkout -b feature/new-algorithm`
4. **Implement** your changes following the existing code structure
5. **Test** thoroughly across different browsers and devices
6. **Commit** with descriptive messages: `git commit -m 'Add bubble sort algorithm'`
7. **Push** your changes: `git push origin feature/new-algorithm`
8. **Submit** a pull request with detailed description

### Adding New Algorithms

To add a new algorithm to AlgoLabs:

1. **Update HTML:** Add a new algorithm card in the `.algo-container` section
2. **Update JavaScript:** Add the algorithm case in the `runAlgorithm()` switch statement
3. **Test Implementation:** Ensure proper input validation and result formatting
4. **Update Documentation:** Add algorithm description to this README

### Code Standards

**HTML Structure:**
- Use semantic HTML5 elements
- Maintain consistent indentation
- Include appropriate accessibility attributes

**CSS Styling:**
- Follow existing naming conventions
- Maintain responsive design principles
- Use consistent spacing and color schemes

**JavaScript Functionality:**
- Implement proper error handling
- Use clear variable and function names
- Include input validation for all algorithms

---

## 📈 Future Enhancements

Potential improvements and additions for AlgoLabs:

**Algorithm Expansion:**
- Sorting algorithms (Bubble Sort, Quick Sort, Merge Sort)
- Search algorithms (Binary Search, Linear Search)
- Graph algorithms (BFS, DFS)
- String manipulation algorithms

**Feature Additions:**
- Step-by-step algorithm visualization
- Performance timing measurements
- Algorithm complexity information
- Code snippet display for educational purposes

**Technical Improvements:**
- Local storage for input history
- Keyboard shortcuts for power users
- Enhanced accessibility features
- Progressive Web App capabilities

---

## 📄 License

<div align="center">

This project is open source 

</div>

---

## 🙏 Acknowledgments

<div align="center">

**Built with passion for computer science education**

</div>

### Resources and Inspiration

**Fonts and Icons:**
- Google Fonts for the Libertinus Mono typeface
- Google Material Symbols for consistent iconography

**Educational Value:**
- Classic computer science algorithms implementation
- Interactive learning approach for algorithm understanding

**Design Philosophy:**
- Clean, minimal interface design
- Focus on functionality and user experience
- Educational accessibility for learners at all levels

---

<div align="center">
  <h3>⭐ Star this repo if you find it helpful for learning algorithms!</h3>
  <p>Made with ❤️ for the computer science community</p>
  
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-6A5ACD?style=for-the-badge&logoColor=white" alt="Back to Top">
  </a>
</div>
