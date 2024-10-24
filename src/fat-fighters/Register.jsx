import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardBody'
import { supabase } from '../utils/sb'
import { AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,Flex, Box, FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react"


const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <>
    <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
            <Heading>Register</Heading>
            </Box>
            <Card >
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <FormControl  width='full' id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" ref={emailRef} required />
                        </FormControl>
                        <FormControl  width='full' id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" ref={passwordRef} required />
                        </FormControl>
                        <FormControl  width='full' id="confirm-password">
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" ref={confirmPasswordRef} required />
                        </FormControl>
                        {errorMsg && (
                            <AlertDialog onClose={() => setErrorMsg("")}>
                                    <AlertDialogBody>
                                        {errorMsg}
                                    </AlertDialogBody>
                                    <AlertDialogFooter>
                                        <AlertDialogCloseButton>
                                            Close
                                        </AlertDialogCloseButton>
                                    </AlertDialogFooter>
                            </AlertDialog>
                        )}
                        {msg && (
                            <AlertDialog variant="success" onClose={() => setMsg("")}>
                                    <AlertDialogBody>
                                        {msg}
                                    </AlertDialogBody>
                            </AlertDialog>
                        )}
                        <Box textAlign="center">
                            <Button type="submit" disabled={loading} variantColor="teal" variant="outline" width="full" mt={4}>
                                Register
                            </Button>
                        </Box>
                    </form>
                </CardBody>
            </Card>
            <Box p={2} textAlign="center">
                Already a User? <Link to={"/login"}>Login</Link>
            </Box>
        </Box>
    </Flex>
      
    </>
  );
};

export default Register;