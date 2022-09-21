// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { ErrorResponseHandler } from "../../common/types";
import { clearSession } from "../../common/utils";
import api from "../../common/api";
import { userLogged } from "../../systemSlice";
import { resetSession } from "../Console/consoleSlice";

const LogoutPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    const deleteSession = () => {
      clearSession();
      dispatch(userLogged(false));
      localStorage.setItem("userLoggedIn", "");
      localStorage.setItem("redirect-path", "");
      dispatch(resetSession());
      navigate(`login`);
    };
    api
      .invoke("POST", `/api/v1/logout`)
      .then(() => {
        deleteSession();
      })
      .catch((err: ErrorResponseHandler) => {
        console.log(err);
        deleteSession();
      });
  };
  logout();
  return <></>;
};

export default LogoutPage;