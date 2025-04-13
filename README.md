# Minimalist E-commerce App

## Description

a minmalist online store for a simple and easy shopping experience. 
discover curated products,secure checkout,to enhance your shopping experience.

## Technologies Used

- TypeScript
- React
- React Router
- Vite
- Supabase
- React Hooks
- React-Bootstrap
- Redux

## Installation

To get a local copy up and running follow these simple steps:

1. **Clone the repo**

   ```sh
   git clone https://github.com/remioluwatomi/minimalist-ecommerce.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd minimalist-ecommerce
   ```

3. **Install dependencies**

   ```sh
   pnpm install
   ```

4. **Set up Supabase**

Sign up for a Supabase account if you do not have one: Supabase Sign Up
Create a new project in the Supabase dashboard.
Create a **Product table** - check supabase.ts file for the table details.
Obtain your Supabase Client URL and Anon Public Key from the Supabase project settings.
Create a .env file in the root of your project and add the following environment variables:

```sh
VITE_SUPABASE_CLIENT_URL=your-supabase-client-url
VITE_SUPABASE_ANON_PUBK=your-supabase-anon-public-key
```

5. **Run the application**

   ```sh
   pnpm run dev
   ```

## Usage

- Navigate to the home page to browse through the app.
- Use the categories page to filter products by category.
- Select a product to view its details and add it to the cart.
- Check out the trending products to see what's popular.

## License

Distributed under the MIT License. See `LICENSE` for more information.
