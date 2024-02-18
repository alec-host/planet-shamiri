# planet-shamiri

A simple web platform that incorporates Ricky &amp; Monty API.

The following features have been implements:

1. A Login page to control access to web application.
2. Retrieves & displays location's {name, type} including resident's  {name, status, image etc.}.
3. A search bar to run a filter based on either {name, type, dimention etc.}. The search operation does not cover episodes or individual character filter.
4. Provide detailed resident's view with extra information about a character on a single page which also includes the ability to create a new note & view note(s).
5. Storage of notes on localStorage.

## Design

The design considerations incoporated in this assigment includes:

1. Component-based Architecture 
    I have broken down UI into resusable components with a single responsibility.
2. Responsive Design 
    The application is responsive accross different devices & screen sizes. I have utilised Tailwind CSS responsive utility classes to adapt to different UI.
3. Performance Optimization
    I have adopted optimization technique such as lazy loading to reducing rendering time.
4. Routing
    Implemented routing using React Router which defines for different views & handle navigation within the web application.
5. State managment: 
6. Error handling:
    I have implemented mechanism to handle errors and prevernt the application from crashing.
7. Scalability and Maintainability
    The application codebase is organised in a modular fashion & contained in different directory structure to facilitate in future development & enhancement. The directories are structured as follows:

    - components
    - layout
    - pages
    - session
    - localStorage
    - css

## Screenshot

**Login Page**
![Login_page screenshot](src/screenshots/login_screenshot.PNG)

**Home Page**
![Home_page screenshot](src/screenshots/home_screenshoot.PNG)

**Character Detail Page**
![Detailed_character_page screenshot](src/screenshots/character_screenshot.PNG)

**Add Note Modal**
![Add_note_page screenshot](src/screenshots/add_notes_screenshot.PNG)


## Resources

1. Ricky Monty's API documentation
https://rickandmortyapi.com/

2. React
https://react.dev/reference/react

3. Tailwindcss
https://tailwindcss.com/



