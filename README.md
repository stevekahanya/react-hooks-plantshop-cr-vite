Plantsy
Plantsy is a React-based admin portal for a local plant shop. It allows shop managers to view their current inventory, add new plants via a dynamic form, track stock status, and search for specific plants in real-time.

Shutterstock
Explore

Features
Inventory Management: View a complete list of all plants fetched from the backend.

Dynamic Search: Filter the inventory list by name instantly as you type.

Stock Tracking: Mark items as "Sold Out" or "In Stock" with a single click.

Inventory Expansion: Add new plants to the database using the integrated submission form.

Installation
To get this project running locally, follow these steps:

Clone the repository:

Bash
git clone <your-repo-link>
Install dependencies:

Bash
npm install
Start the Backend server:

Bash
npm run server
Note: The server runs on http://localhost:6001.

Start the Frontend application:

Bash
npm run dev
API Endpoints
GET /plants
Returns an array of all plant objects.

POST /plants
Adds a new plant to the database.

Required Headers: { "Content-Type": "application/json" }

Body Requirements:

JSON
{
  "name": "string",
  "image": "string",
  "price": number
}
Technologies Used
React: For UI and component-based architecture.

Vite: Frontend tooling for development and building.

JSON-Server: Mock backend for REST API persistence.

CSS3: Custom styling for a clean, plant-focused aesthetic.

Completed Project Preview
<img width="1331" height="768" alt="Screen Shot 2026-02-23 at 3 20 51 AM" src="https://github.com/user-attachments/assets/cb0061d2-7dd3-45dc-aa18-fde3282558a3" />

