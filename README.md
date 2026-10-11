# Web UI Testing with Playwright 🚀

A professional automated testing project demonstrating end-to-end (E2E) validation of the Swag Labs (Saucedemo) sandbox. This project is designed as a showcase of QA automation best practices, including data-driven testing and environment-specific configuration.

## 🛠 Tech Stack
- **Language:** JavaScript / Node.js
- **Framework:** Playwright
- **OS:** Linux
- **Hardware:** Raspberry Pi
- **Target:** Swag Labs (Saucedemo)

## 📊 Data Model & Logic Mapping
To ensure maintainability and scalability, this project utilizes a decoupled data model:

### 1. Test Data Input
All credentials and environment-specific constants are stored in `tests/data/test-data.json`.
- **User:** `standard_user`
- **Pass:** `secret_sauce`

### 2. Expected State Mapping
The test verifies successful authentication by mapping three critical system states:
- **URL Transition:** Validates redirect to `inventory.html`.
- **UI Presence:** Confirms the visibility of the shopping cart icon (`[data-test="shopping-cart-link"]`).
- **Content Validation:** Verifies the presence of the "Products" header text.

### 3. Environment Configuration
The project is optimized for a lightweight, embedded environment:
- **Architecture:** Node.js runtime on a Linux-based Raspberry Pi.

## 🚀 Getting Started
1. Clone the repo:
   ```bash
   git clone git@github.com:golovanofffaleks-sys/web-ui-testing-playwright.git
   ```
2. Install dependencies:
   ```bash
   npm install
   npx playwright install chromium
   ```
3. Run the test:
   ```bash
   npx playwright test
   ```

---

<details>
<summary>🇷🇺 Версия на русском языке</summary>

# Автоматизация тестирования Web UI с Playwright 🚀

Профессиональный проект по автоматизированному тестированию, демонстрирующий сквозную (E2E) проверку песочницы Swag Labs (Saucedemo). Проект создан как витрина лучших практик QA-автоматизации, включая тестирование на основе данных (Data-Driven Testing) и конфигурацию под конкретную среду.

## 🛠 Технологический стек
- **Язык:** JavaScript / Node.js
- **Фреймворк:** Playwright
- **ОС:** Linux
- **Железо:** Raspberry Pi
- **Цель:** Swag Labs (Saucedemo)

## 📊 Модель данных и маппинг логики
Для обеспечения масштабируемости и удобства поддержки в проекте используется разделенная модель данных:

### 1. Входные данные (Test Data)
Все учетные данные и константы среды вынесены в отдельный файл `tests/data/test-data.json`.
- **Пользователь:** `standard_user`
- **Пароль:** `secret_sauce`

### 2. Маппинг ожидаемых состояний
Тест подтверждает успешную аутентификацию через проверку трех критических состояний системы:
- **Переход по URL:** Валидация редиректа на страницу `inventory.html`.
- **Наличие UI-элемента:** Подтверждение видимости иконки корзины (`[data-test="shopping-cart-link"]`).
- **Валидация контента:** Проверка наличия заголовка с текстом "Products".

### 3. Конфигурация среды
Проект оптимизирован для работы в легковесном встроенном окружении:
- **Архитектура:** Среда выполнения Node.js на базе Linux на плате Raspberry Pi.

## 🚀 Быстрый старт
1. Клонируйте репозиторий:
   ```bash
   git clone git@github.com:golovanofffaleks-sys/web-ui-testing-playwright.git
   ```
2. Установите зависимости:
   ```bash
   npm install
   npx playwright install chromium
   ```
3. Запустите тест:
   ```bash
   npx playwright test
   ```
</details>
