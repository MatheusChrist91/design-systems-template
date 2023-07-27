import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import SocialProfileSimple from "./components/Card"

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      {users.map((user) => {
        console.log(user)
        return <SocialProfileSimple user={user}/>
      })}      
    </ChakraProvider>
  );
}

//show de buela