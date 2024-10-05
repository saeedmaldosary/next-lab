import React from "react";

interface Props {
  params: {
    // We can have multi parm routes currently we only have id
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
