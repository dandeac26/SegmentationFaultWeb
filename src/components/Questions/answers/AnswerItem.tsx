import React, { useCallback, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { HiOutlineCode } from "react-icons/hi";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

export type Answer = {
  id?: string;
  creatorId: string;
  creatorDisplayText: string;
  creatorPhotoURL: string;
  questionId: string;
  questionTitle: string;
  text: string;
  createdAt?: Timestamp;
};

type AnswerItemProps = {
  answer: Answer;
  onDeleteAnswer: (answer: Answer) => void;
  isLoading: boolean;
  userId?: string;
};

const AnswerItem: React.FC<AnswerItemProps> = ({
  answer,
  onDeleteAnswer,
  isLoading,
  userId,
}) => {
  // const [loading, setLoading] = useState(false);

  // const handleDelete = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     const success = await onDeleteAnswer(answer);

  //     if (!success) {
  //       throw new Error("Error deleting answer");
  //     }
  //   } catch (error: any) {
  //     console.log(error.message);
  //     // setError
  //     setLoading(false);
  //   }
  // }, [setLoading]);

  return (
    <Flex>
      <Box mr={2}>
        <Icon as={HiOutlineCode} fontSize={24} color="gray.300" />
      </Box>
      <Stack spacing={1}>
        <Stack direction="row" align="center" spacing={2} fontSize="8pt">
          <Text
            color="brand.400"
            fontWeight={700}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {answer.creatorDisplayText}
          </Text>
          {answer.createdAt?.seconds && (
            <Text color="brand.400">
              {moment(new Date(answer.createdAt?.seconds * 1000)).fromNow()}
            </Text>
          )}
          {isLoading && <Spinner size="sm" />}
        </Stack>
        <Text fontSize="10pt" color="white">
          {answer.text}
        </Text>
        <Stack
          direction="row"
          align="center"
          cursor="pointer"
          fontWeight={600}
          color="gray.500"
        >
          <Icon as={IoArrowUpCircleOutline} />
          <Icon as={IoArrowDownCircleOutline} />
          {userId === answer.creatorId && (
            <>
              <Text fontSize="9pt" _hover={{ color: "brand.300" }}>
                Edit
              </Text>
              <Text
                fontSize="9pt"
                _hover={{ color: "brand.300" }}
                onClick={() => onDeleteAnswer(answer)}
              >
                Delete
              </Text>
            </>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
};
export default AnswerItem;
