import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // currentUser 에서는 아직 firebase가 구동되지 않아, 로그인 여부를 모름
  // 따라서 구동후 로그인 여부를 확인할 수 있는 onAuthStateChanged 를 사용한다
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        // user object 가 shallow compare를 수행하기에, 달라진게 없다고 간주함
        // user 객체 중 필요한 것만 userObj 에 담자
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        if (user.displayName === null) {
          user.updateProfile({
            displayName: "newbie"
          })
        }
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    })
  }

  return (
    <>
      {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(isLoggedIn)} userObj={userObj} /> : <h1>Initializing...</h1>}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
