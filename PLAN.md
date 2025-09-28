# Plan for File Upload POC

This document outlines the plan to create a proof-of-concept for a file upload feature in the React Tanstack Router project.

## 1. Setup Project Dependencies

*   Add the Mantine UI library to the project for UI components.
*   Add the Zustand library for global state management.

## 2. Create a Global State for the File

*   Implement a simple global state using Zustand to hold the uploaded file data. This will allow easy access to the file content across different components and routes without prop drilling.

## 3. Structure the Application

*   Modify the root layout (`src/routes/__root.tsx`) to include a navigation sidebar and a main content area.
*   Create a shared menu component (`src/components/menu.tsx`) for navigation.

## 4. Implement the File Upload View

*   Create a new route and component for the home page at `src/routes/index.tsx`.
*   Use Mantine's `FileInput` component to create a drag-and-drop file upload area.
*   When a file is uploaded, store it in the global Zustand store.
*   Add two buttons:
    *   "View File": Navigates to the file view page. This button will be disabled until a file is selected.
    *   "Clear File": Clears the file from the global store and the file input. This button will also be disabled until a file is selected.

## 5. Implement the File Content View

*   Create a new route and component at `src/routes/viewfile.tsx`.
*   This component will read the file from the global Zustand store.
*   It will display the file's name, type, size, and its content.

## Component Structure Diagram

```mermaid
graph TD
    A[Root Layout (__root.tsx)] --> B(Sidebar Menu);
    A --> C{Main Content Area};

    subgraph "Routes"
        C --> D[Home Page (index.tsx)];
        C --> E[File View Page (viewfile.tsx)];
    end

    subgraph "Components"
        D --> F[Drag & Drop File Input];
        D --> G[View File Button];
        D --> H[Clear File Button];
    end

    subgraph "State"
        I[Zustand Store]
    end

    F -- on file upload --> I;
    H -- on click --> I;
    E -- reads file from --> I;