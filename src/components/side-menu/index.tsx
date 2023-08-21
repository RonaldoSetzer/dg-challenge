import { Link } from "react-router-dom";
import { Category } from "../../domain/entities/category.entity";
import TabItem from "../../components/tab-item";
import Logo from "../../components/logo";
import { Container, Footer, Header } from "./styles";
import ToggleEnable from "../toggle-enable";

interface SideMenuProps {
  categories: Category[];
  currentCategory?: Category;
}

function SideMenu({ categories, currentCategory }: SideMenuProps) {
  return (
    <Container>
      <Header>
        <Logo />
        <ul>
          {categories && categories.map((category) => (
            <li key={category.id}>
              <Link to={`/${category.id}`}>
                <TabItem
                  label={category.title}
                  active={currentCategory && currentCategory.id === category.id || false}
                />
              </Link>
            </li>
          ))}
        </ul>
      </Header>
      <Footer>
        All plugins enabled
        <ToggleEnable />
      </Footer>
    </Container>
  );
}

export default SideMenu;

