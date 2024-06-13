import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {inspect} from "util";
import styles from "./Breadcrumb.module.scss";
import styled from "styled-components";
const StyledBreakcrumb = styled(Breadcrumb.Item)`
  &:not(:first-child):before {
    content: ">" !important;
  }
`;

function breadcrumb() {

    
    return (

        <div className={styles.breadcrumb}>
        <div className="container pt-3 pb-2">
        <Breadcrumb className={styles.page}>
         <StyledBreakcrumb  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Home</StyledBreakcrumb>
            <StyledBreakcrumb   className={styles.page}>About Us</StyledBreakcrumb>
        </Breadcrumb>
        </div>
        </div>
    );
}

export default breadcrumb;
