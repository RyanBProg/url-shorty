import LinkResult from "../link-result/LinkResult";
import styles from "./UrlForm.module.scss";
import { Link } from "../../utils/types";

type Props = {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
};

export default function UrlForm({ links, setLinks }: Props) {
  return (
    <section className={styles.urlForm}>
      <form action="">
        <input type="text" placeholder="Shorten a link here..." />
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
