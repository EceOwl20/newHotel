// "use client";
// import Navbar from "../../components/Navbar";
// import { useEffect, useState } from "react";

// // Function to fetch data
// const fetchData = async () => {
//   try {
//     const response = await fetch("path/to/your/api");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };

// // Example component where you fetch data and pass it as props
// const NavbarServer = () => {
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchAndSetData = async () => {
//       const data = await fetchData();
//       setComponents(data);
//     };

//     fetchAndSetData();
//   }, []);

//   return (
//     <div>
//       {/* Pass the fetched data as props to OtherClass */}
//       <Navbar components={components} />
//     </div>
//   );
// };

// export default NavbarServer;
