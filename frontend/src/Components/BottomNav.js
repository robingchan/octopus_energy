import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { OfflineBolt, Whatshot, Equalizer } from "@material-ui/icons";

const BottomNav = () => {
  const styles = {
    fixed: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
  };

  return (
    <BottomNavigation
      onChange={(event, newValue) => {
        console.log(newValue);
      }}
      showLabels
      style={styles.fixed}
    >
      <BottomNavigationAction label="Electric" icon={<OfflineBolt />} />
      <BottomNavigationAction label="Gas" icon={<Whatshot />} />
      <BottomNavigationAction label="Both" icon={<Equalizer />} />
    </BottomNavigation>
  );
};

export default BottomNav;
