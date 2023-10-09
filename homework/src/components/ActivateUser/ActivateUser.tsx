import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { ACTIVATE_USER } from "src/actions/actions";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const ActivateUser = () => {
  const { uid, token } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  useEffect(() => {
    if (uid && token) {
      dispatch(ACTIVATE_USER(uid, token, navigate));
    }
  }, [uid, token]);
  return (
    <PageTemplate title="Activate User">
      <div>Activate User</div>
    </PageTemplate>
  );
};

export default ActivateUser;

