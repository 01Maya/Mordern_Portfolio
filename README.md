# 🌟 Ricardo's Personal Portfolio



A **modern, responsive, and fully interactive portfolio website** showcasing my skills, projects, and professional experience as a **full-stack developer**. Built with **Next.js, React, TypeScript, Tailwind CSS**, and enhanced with smooth animations and interactive effects.  

---

## 📄 Description

This portfolio is a comprehensive showcase of my professional journey and technical expertise. It emphasizes a **clean, minimal design**, smooth animations, **interactive hover effects**, and full responsiveness across all devices.  

Visitors can explore my projects, skills, experience, and get in touch directly through the contact form.  

---

## ✨ Features

- **📱 Fully Responsive Design:** Optimized for mobile, tablet, and desktop devices.  
- **🎨 Modern UI/UX:** Minimalist aesthetic with clear typography and gradients.  
- **💨 Smooth Animations:** Subtle fade, scale, and motion effects on scroll and hover.  
- **🖱️ Interactive Navigation:** Navbar highlights active sections with smooth scroll.  
- **⚡ Optimized Performance:** Built with Next.js SSR & SSG for fast load times.  
- **💡 Interactive Projects:** Cards with hover effects, tilt, and smooth transitions.  

---

## 📂 Website Sections

- **Home:** Hero section with introduction and call-to-action buttons.  
- **About:** Background, skills overview, and personal journey.  
- **Experience:** Animated timeline of work history and roles.  
- **Skills:** List of technical proficiencies with interactive icons.  
- **Projects:** Project gallery with live demo links and tech stack.  
- **Contact:** Contact form with Web3Forms integration and toast notifications.  

---

## 🛠️ Tech Stack



* **Next.js**
* **React**
* **TypeScript**
* **TailwindCSS**
* **Framer Motion**

---

## 📸 Preview

![Home Section](screenshots/home.png)  


---

## 🚀 Installation & Setup

### Prerequisites

Make sure you have **Node.js (v18 or later)** and a package manager like **npm** or **yarn** installed.

### Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2. **Navigate to the project directory**
    ```bash
    cd your-repository-name
    ```
3. **Install dependencies**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```
4. **Run the development server**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

---

## 📬 Contact Form (Web3Forms Integration)

The portfolio contact form uses **[Web3Forms](https://web3forms.com/)** to handle form submissions.  

### Setup Steps:

1. **Obtain your Web3Forms public access key**
   - Sign up at [Web3Forms](https://web3forms.com/) and create a form.  
   - Copy your **public access key** from the dashboard.

2. **Add the access key in the contact form component**
   - Open `Contact.tsx` (or your contact component).  
   - Replace the placeholder `"YOUR_ACCESS_KEY_HERE"` in the hidden input:

```tsx
<input type="hidden" name="access_key" value="YOUR_PUBLIC_ACCESS_KEY" />
````

3. **Optional customization**

   * You can also edit the `subject`, `from_name`, or `replyto` hidden fields according to your project:

```tsx
<input type="hidden" name="subject" value="New Contact Form Submission" />
<input type="hidden" name="from_name" value="Portfolio Website" />
<input type="hidden" name="replyto" value="email" />
```

4. **Test the form**

   * Run your project locally: `npm run dev`


---
