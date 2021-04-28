import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { SearchContainer, Form, Button, Input } from "./style";

export default function index({ search }) {
  const [input, setInput] = useState("");
  const [state, setState] = useState(false);
  const inputFocus = useRef(null);
  const node = useRef();

  const router = useRouter();

  useEffect(() => {
    //page load huda mount hanne
    document.addEventListener("mousedown", handleClick);
    //unmount when the page is left the listener should be removed
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(e) {
    if (!node.current.contains(e.target)) {
      setState(false);
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    setInput("");
    router.push({
      pathname: `/search`,
      query: {
        searchQuery: input,
      },
    });
    setState(false);
  }

  return (
    <SearchContainer>
      <Form
        state={state}
        ref={node}
        onSubmit={onFormSubmit}
        onClick={() => {
          setState(true);
          inputFocus.current.focus();
        }}
      >
        <Button type="submit" state={state}>
          <Image src="/search.svg" height={17} width={17} />
        </Button>
        <Input
          state={state}
          ref={inputFocus}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a movie..."
        />
      </Form>
    </SearchContainer>
  );
}
