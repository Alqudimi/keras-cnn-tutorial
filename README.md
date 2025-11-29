<p align="center">
  <img src="https://img.shields.io/badge/TensorFlow-2.x-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow">
  <img src="https://img.shields.io/badge/Keras-Deep%20Learning-D00000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras">
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
</p>

<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/tensorflow/tensorflow/master/tensorflow/core/platform/default/logging.h" width="200" alt="CNN Tutorial">
  <br>
  Keras CNN Tutorial
  <br>
</h1>

<h4 align="center">A comprehensive Arabic guide for building Convolutional Neural Networks (CNN) using TensorFlow and Keras</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#documentation-structure">Documentation</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#practical-projects">Projects</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Alqudimi/keras-cnn-tutorial?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/stars/Alqudimi/keras-cnn-tutorial?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/Alqudimi/keras-cnn-tutorial?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/issues/Alqudimi/keras-cnn-tutorial?style=flat-square" alt="Issues">
  <img src="https://img.shields.io/github/last-commit/Alqudimi/keras-cnn-tutorial?style=flat-square" alt="Last Commit">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square" alt="Made with Love">
  <img src="https://img.shields.io/badge/Language-Arabic-green?style=flat-square" alt="Arabic">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome">
</p>

---

## 📖 About

This repository contains a comprehensive Arabic documentation for learning Deep Learning with TensorFlow and Keras. The documentation covers everything from CNN architecture fundamentals to advanced training techniques and model deployment.

> **Note**: The documentation is written in Arabic (RTL) to serve the Arabic-speaking developer community.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏗️ **CNN Architecture** | Detailed explanation of Conv2D, BatchNorm, MaxPooling, Dropout layers |
| 🖼️ **Image Preprocessing** | Data augmentation, normalization, and image cleaning techniques |
| ⚙️ **Training Settings** | Optimizers, learning rate schedulers, early stopping, regularization |
| 📈 **Three-Phase Training** | Advanced training strategy for stable and effective models |
| 📊 **Evaluation Metrics** | Accuracy, Precision, Recall, F1-Score, Confusion Matrix, ROC-AUC |
| 🚀 **Model Deployment** | TFLite, TensorFlow.js, Flask, FastAPI, ONNX export |
| 💻 **Practical Examples** | Complete, copy-paste ready code examples |

## 📚 Documentation Structure

```
docs/
├── index.html                 # Home page
├── architecture.html          # CNN architecture guide
├── preprocessing.html         # Image preprocessing
├── dataset.html               # Dataset building
├── training-settings.html     # Training configuration
├── training-phases.html       # Three-phase training
├── evaluation.html            # Model evaluation
├── common-mistakes.html       # Common mistakes & fixes
├── performance.html           # Performance optimization
├── deployment.html            # Model deployment
├── code-templates.html        # Ready-to-use code templates
├── explainability.html        # Model explainability (XAI)
├── examples.html              # Practical examples
│
├── cats-dogs.html             # Project: Cats vs Dogs classification
├── flowers.html               # Project: Flower classification
├── fashion-mnist.html         # Project: Fashion MNIST
├── plant-disease.html         # Project: Plant disease detection
│
├── css/
│   └── style.css              # Stylesheet
├── js/
│   └── main.js                # JavaScript functionality
└── images/                    # Image assets
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

```bash
# Python 3.8+
python --version

# TensorFlow 2.x
pip install tensorflow

# Additional dependencies
pip install numpy matplotlib scikit-learn opencv-python pillow
```

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Alqudimi/keras-cnn-tutorial.git
   cd keras-cnn-tutorial
   ```

2. **Open the documentation**
   ```bash
   # Option 1: Open directly in browser
   open docs/index.html
   
   # Option 2: Use a local server
   python -m http.server 8000 --directory docs
   # Then visit http://localhost:8000
   ```

3. **Start learning!**
   - Begin with the [Architecture Guide](docs/architecture.html)
   - Follow the recommended learning path on the home page

## 🎯 Practical Projects

| Project | Description | Difficulty |
|---------|-------------|------------|
| 🐱🐶 [Cats vs Dogs](docs/cats-dogs.html) | Binary classification of cat and dog images | ⭐ Beginner |
| 🌸 [Flower Classification](docs/flowers.html) | Multi-class flower species classification | ⭐⭐ Intermediate |
| 👕 [Fashion MNIST](docs/fashion-mnist.html) | Clothing item classification | ⭐ Beginner |
| 🌿 [Plant Disease](docs/plant-disease.html) | Detecting plant diseases from leaf images | ⭐⭐⭐ Advanced |

## 📋 Topics Covered

### Core Concepts
- [x] Convolutional Neural Networks (CNN)
- [x] Image preprocessing and augmentation
- [x] Transfer learning basics
- [x] Model evaluation and metrics

### Advanced Topics
- [x] Three-phase training strategy
- [x] Learning rate scheduling
- [x] Early stopping and checkpoints
- [x] Handling imbalanced datasets
- [x] Model explainability (XAI)

### Deployment
- [x] TensorFlow Lite for mobile
- [x] TensorFlow.js for web
- [x] REST API with Flask/FastAPI
- [x] ONNX export

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📝 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing to the project.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

<p align="center">
  <img src="https://img.shields.io/badge/Author-Abdulaziz%20Alqudimi-blue?style=for-the-badge" alt="Author">
</p>

**Abdulaziz Alqudimi**

- 📧 Email: [eng7mi@gmail.com](mailto:eng7mi@gmail.com)
- 🐙 GitHub: [@Alqudimi](https://github.com/Alqudimi)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

## 📊 Project Stats

<p align="center">
  <img src="https://img.shields.io/github/repo-size/Alqudimi/keras-cnn-tutorial?style=for-the-badge" alt="Repo Size">
  <img src="https://img.shields.io/github/languages/count/Alqudimi/keras-cnn-tutorial?style=for-the-badge" alt="Languages">
  <img src="https://img.shields.io/github/languages/top/Alqudimi/keras-cnn-tutorial?style=for-the-badge" alt="Top Language">
</p>

---

<p align="center">
  <sub>Built with Abdulaziz Alqudimi</sub>
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>
