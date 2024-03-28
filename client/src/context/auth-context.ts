import { Seller } from "@/graphql/graphql";
import React from "react";

const AuthContext = React.createContext<Seller | null>(null);

export default AuthContext;
