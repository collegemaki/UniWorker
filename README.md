# UniWorkers

## 1. Project Description
UniWorkers is a web application that connects students (Spartans) with local service providers from the same school, such as tutors, designers, programmers, writers, and photographers. Anyone can browse services without an account, and signing up with a school email is only required when a user wants to book a service. Access is limited to our school community.

## 2. Problem Being Addressed
Students who need academic or creative help often struggle to find reliable people to hire, while skilled students have no organized way to offer their services.

- Requests are scattered across Facebook groups, group chats, and word of mouth, which makes them hard to search.
- Skilled students have no portfolio, ratings, or record of past work to build trust.
- There is no standard pricing, so students are unsure what a fair rate is.
- Dealing with strangers outside the school can feel unsafe.

These issues lead to missed opportunities for workers, wasted time for clients, and a lack of trust between students.

## 3. Project Objectives
**General Objective:** To develop UniWorkers, a school-only marketplace where Spartans can easily find, hire, and review student service providers.

**Specific Objectives:**
- Allow guests to browse, search, and filter services without signing up.
- Require sign-up with a verified school email only when a user books a service.
- Let skilled students create service listings with prices, descriptions, and portfolios.
- Support the full booking process: request, acceptance, delivery, payment, and review.
- Build trust through ratings, reviews, and worker verification.
- Give administrators tools to handle reports, disputes, and inappropriate listings.

## 4. Target Users
- **Clients:** Students who want to hire a service such as tutoring, design, programming, writing, or printing.
- **Workers:** Students who offer services and want to earn from their skills. One account can be both a client and a worker.
- **Guests:** Visitors who browse listings without logging in.
- **Administrators:** School-approved staff or student officers who verify workers and manage reports.

## 5. Main Features

### 5.1 Guest Browsing
Anyone can scroll through the home feed, view service details, and read worker profiles without creating an account, similar to browsing on foodpanda or Shopee.

### 5.2 Search, Filters, and Sorting
Users can search by keyword, filter by category (Tutoring, Design, Programming, Writing, Photo & Video, Printing), and sort by rating or price.

### 5.3 School-Only Sign-Up
Sign-up and login accept only the school email domain. The sign-up prompt appears when a guest presses **Hire**, and the user returns to the same service afterward.

### 5.4 Service Listings and Worker Profiles
Each listing shows the title, description, price (fixed or hourly), category, rating, and reviews. Worker profiles show the student's course, year level, and services offered.

### 5.5 Booking Flow
Clients choose a preferred date, add notes for the worker, select a payment method (cash on meetup, GCash, or Maya), and send a booking request.

### 5.6 Order Tracking
Each order moves through clear stages: **Pending → Accepted → In progress → Delivered → Completed**. The client confirms completion before the order is closed.

### 5.7 Ratings and Reviews
After an order is completed, the client and the worker can rate and review each other. Only completed orders can be reviewed.

### 5.8 Planned Features
- In-app chat between client and worker
- Job request posting where workers send proposals
- E-wallet payments with escrow (payment released after the client confirms)
- Notifications, vouchers, and loyalty badges
- Report and dispute system
- Admin panel for verification and moderation

## 6. Technologies Used

| Technology | Purpose |
|---|---|
| Javascript | Front-end prototype (pages, styling, interactions) |
| Java | Programming language / framework for the back end |
| TBA | Database for users, services, orders, and reviews |
| TBA | Authentication and school email verification |
| TBA | Payment integration (GCash / Maya) |
| Git and GitHub | Version control and collaboration |

*Replace the placeholders above with the tools the team actually used in the project.*

## 7. Team Members and Roles

| Team Member | Role |
|---|---|
| Justin Reneir Maquiran | Project Leader |
| Jeshreel Cuevas | System/Design Lead |
| Tristan James Bonto | TBA |

## 8. OOP Concepts Demonstrated
TBA

## 9. Instructions for Running the Program
Open the repository's `index.html` in VS Code and choose **Open with Live Server**. The frontend uses browser-native JavaScript modules, so no npm install or backend is needed.

The home feed, category filters, theme switch, account, settings, dashboard, and admin screens are implemented.

### Demo accounts

- Create a student or worker account from the Account tab. Accounts and profiles are saved in this browser.
- Demo admin login: `admin@school.edu` / `admin123`.
- The current login is a frontend prototype using browser storage; it is not connected to PostgreSQL or secure enough for production. Do not reuse real passwords.

### PostgreSQL setup

1. Install PostgreSQL and pgAdmin.
2. Create a database named `uniworkers`:
   ```sql
   CREATE DATABASE uniworkers;
   ```
3. Open the `uniworkers` database in pgAdmin and run `backend/sql/uniworkers.sql`.
4. The sample users use `REPLACE_WITH_HASH` placeholders. Replace them with password hashes generated by the backend before enabling database-backed authentication. The current demo login does not read these SQL users.

## 10. Sample Screenshots
TBA

## 11. Known Limitations
TBA

## 12. Future Improvements
TBA

## 13. Project Contributors

| Name | Contribution |
|---|---|
| Justin Reneir Maquiran | Front Page |
| Jeshreel Cuevas | TBA |
| Tristan James Bonto | TBA |
