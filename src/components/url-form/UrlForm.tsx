import LinkResult from "../link-result/LinkResult";
import styles from "./UrlForm.module.scss";
import { Link } from "../../utils/types";
import { FormEvent } from "react";
import { useState } from "react";

type Props = {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
};

export default function UrlForm({ links, setLinks }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <section className={styles.urlForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button>Shorten It!</button>
        <span>
          <i>Please add a link</i>
        </span>
      </form>
      <ul role="list">
        {links.map((link, index) => {
          return <LinkResult link={link} key={index} />;
        })}
      </ul>
    </section>
  );
}
