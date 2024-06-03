import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, Avatar } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" borderWidth="1px" borderRadius="lg" overflowY="auto" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} spacing={3} alignSelf={message.sender === "You" ? "flex-end" : "flex-start"}>
              {message.sender !== "You" && <Avatar name={message.sender} src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzM4ODI3MXww&ixlib=rb-4.0.3&q=80&w=1080" />}
              <Box bg={message.sender === "You" ? "blue.500" : "gray.300"} color={message.sender === "You" ? "white" : "black"} px={4} py={2} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "You" && <Avatar name={message.sender} src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzM4ODI3MXww&ixlib=rb-4.0.3&q=80&w=1080" />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <Button onClick={handleSend} colorScheme="blue" rightIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
