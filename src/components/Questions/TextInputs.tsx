import React from "react";
import { Stack, Input, Textarea, Flex, Button } from "@chakra-ui/react";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
    tags: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  textInputs,
  onChange,
  handleCreatePost,
  loading,
}) => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        value={textInputs.title}
        onChange={onChange}
        color="white"
        focusBorderColor="brand.300"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "#335555",
        }}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
      />
      <Textarea
        name="body"
        color="white"
        value={textInputs.body}
        onChange={onChange}
        fontSize="10pt"
        focusBorderColor="brand.300"
        placeholder="Text (optional)"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "#335555",
        }}
        height="100px"
      />
      <Input
        name="tags"
        value={textInputs.title}
        onChange={onChange}
        color="white"
        focusBorderColor="brand.300"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "#335555",
        }}
        fontSize="10pt"
        borderRadius={4}
        placeholder="tag1,tag2"
      />
      <Flex justify="flex-end">
        <Button
          height="34px"
          padding="0px 30px"
          disabled={!textInputs.title}
          isLoading={loading}
          onClick={handleCreatePost}
        >
          Ask Question
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
