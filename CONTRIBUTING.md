# Contributing to Keras CNN Tutorial

<p align="center">
  <img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge" alt="Contributions Welcome">
  <img src="https://img.shields.io/badge/PRs-Welcome-blue?style=for-the-badge" alt="PRs Welcome">
</p>

First off, thank you for considering contributing to this project! 🎉

The following is a set of guidelines for contributing to the Keras CNN Tutorial. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#-reporting-bugs)
  - [Suggesting Enhancements](#-suggesting-enhancements)
  - [Your First Code Contribution](#-your-first-code-contribution)
  - [Pull Requests](#-pull-requests)
- [Style Guidelines](#style-guidelines)
  - [HTML Style Guide](#html-style-guide)
  - [CSS Style Guide](#css-style-guide)
  - [Git Commit Messages](#git-commit-messages)
- [Additional Notes](#additional-notes)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When creating a bug report, include:**

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Browser/OS information**

Use this template:

```markdown
## Bug Description
A clear and concise description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Screenshots
If applicable, add screenshots.

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
```

### 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear title** for the suggestion
- **Detailed description** of the proposed enhancement
- **Why this would be useful** to the project
- **Possible implementation** approach (optional)

### 🚀 Your First Code Contribution

Unsure where to begin? Look for these labels:

| Label | Description |
|-------|-------------|
| `good first issue` | Good for newcomers |
| `help wanted` | Extra attention needed |
| `documentation` | Documentation improvements |
| `enhancement` | New feature or request |

### 📥 Pull Requests

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/keras-cnn-tutorial.git
   ```
3. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and commit them
5. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

#### Pull Request Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have tested my changes
- [ ] I have updated documentation if needed
- [ ] My changes generate no new warnings

## Style Guidelines

### HTML Style Guide

```html
<!-- Use semantic HTML -->
<section id="example" class="content-section">
  <h2>Section Title</h2>
  <p>Content goes here...</p>
</section>

<!-- Indent with 2 spaces -->
<div class="container">
  <div class="row">
    <div class="col">Content</div>
  </div>
</div>

<!-- Use meaningful class names -->
<nav class="main-navigation">
  <a href="index.html" class="nav-link">Home</a>
</nav>
```

### CSS Style Guide

```css
/* Use CSS custom properties for consistency */
:root {
  --primary-color: #4f46e5;
  --text-primary: #1f2937;
}

/* Use BEM-like naming convention */
.card { }
.card-header { }
.card-body { }
.card--featured { }

/* Group related properties */
.element {
  /* Positioning */
  position: relative;
  
  /* Box model */
  margin: 0;
  padding: 1rem;
  
  /* Typography */
  font-size: 1rem;
  color: var(--text-primary);
  
  /* Visual */
  background: white;
  border-radius: 8px;
}
```

### Git Commit Messages

Follow conventional commits format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(navigation): add dropdown menu for advanced topics
fix(css): correct mobile responsive issues
docs(readme): update installation instructions
```

## Additional Notes

### 📝 Documentation Contributions

When contributing to documentation:

1. **Maintain RTL (Right-to-Left)** formatting for Arabic content
2. **Use consistent terminology** across all pages
3. **Include code examples** where applicable
4. **Add appropriate metadata** (title, description)

### 🌐 Translation Guidelines

If contributing translations:

- Keep technical terms in English with Arabic explanation
- Maintain code snippets in English
- Test RTL rendering in browsers

### 📊 Adding New Projects

When adding new practical projects:

1. Follow the existing project structure
2. Include complete, tested code
3. Add the project to the navigation
4. Update the examples page
5. Add entry in README.md

---

<p align="center">
  <strong>Thank you for contributing! 🙏</strong>
</p>

<p align="center">
  <sub>Every contribution, no matter how small, makes a difference.</sub>
</p>
