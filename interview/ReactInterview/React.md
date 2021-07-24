1.  The ref is used to return a reference to the element.

2.            A -> BC

3.  How will you update prop value in B.

4.  Fragments - Fragments let you group a list of children without adding extra nodes to the DOM

5.  React hooks

---

const Users = () => {
const data = [
{ id: 1, name: "Prajakta" },
{ id: 2, name: "Kiran" },
{ id: 3, name: "Mustafa" },
];

return (

<ul className="users">
{data.map((user) => (
<li className="user">{user}</li>
))}
</ul>
);
};

Different state management ways
how would you go about passing data across multiple levels of depth, without passing it from component to component?
