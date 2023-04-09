import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PageContentLayout from "@/components/layout/PageContent";
import NewQuestionForm from "@/components/Questions/NewQuestionForm";
import { auth } from "@/firebase/clientApp";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const CreateQuestion: NextPage = () => {
  const [user, loadingUser, error] = useAuthState(auth);
  const router = useRouter();

  /**
   * Not sure why not working
   * Attempting to redirect user if not authenticated
   */
  useEffect(() => {
    if (!user && !loadingUser) {
      router.push(`/`);
    }
  }, [user, loadingUser]);

  console.log("HERE IS USER", user, loadingUser);

  return (
    <>
      <PageContentLayout maxWidth="1060px">
        {[
          <>
            <Box p="14px 0px" borderBottom="1px solid" borderColor="brand.400">
              <Text fontWeight={600} color="brand.400">
                Create a question
              </Text>
            </Box>
            {user && <NewQuestionForm user={user} />}
          </>,
          <>
            <Card ml={10} width="75%" bg="brand.200">
              <CardHeader>
                <Heading size="md" color="brand.400">
                  Writing a good Question
                </Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading
                      size="xs"
                      textTransform="uppercase"
                      color="brand.400"
                    >
                      Important
                    </Heading>
                    <Text pt="2" fontSize="sm" color="brand.400">
                      Make sure this question was not answered before.
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      size="xs"
                      textTransform="uppercase"
                      color="brand.400"
                    >
                      Information
                    </Heading>
                    <Text pt="2" fontSize="sm" color="brand.400">
                      Provide a detailed description of the problem.
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      size="xs"
                      textTransform="uppercase"
                      color="brand.400"
                    >
                      Respect Others
                    </Heading>
                    <Text pt="2" fontSize="sm" color="brand.400">
                      Make sure your post does not contain any offensive words.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </>,
        ]}
      </PageContentLayout>
    </>
  );
};

export default CreateQuestion;
