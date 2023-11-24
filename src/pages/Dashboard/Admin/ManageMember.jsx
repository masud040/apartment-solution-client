import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserDataRow from "../../../components/Table/UserDataRow";

const ManageMember = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  return (
    <div className="overflow-x-scroll">
      <table className="w-full ">
        <thead>
          <tr>
            <th>SI</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserDataRow
              key={user._id}
              refetch={refetch}
              user={user}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMember;
