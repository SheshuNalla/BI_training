import {useState, type FormEvent} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectItem,
    SelectValue
} from "@/components/ui/select";

export type Employee = {
    name: string,
    email: string,
    department: string
}

type EmployeeDialogProps = {
    onSave: (employee: Employee) => void
}

export function EmployeeDialog({onSave}: EmployeeDialogProps){
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        if(!department) return;
        const employee: Employee = {
            name,
            email,
            department
        };
        onSave(employee);

        setName("");
        setEmail("");
        setDepartment("");
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Employee</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
                    <DialogDescription>
                        Enter the employee details below
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="employee-name" className="text-sm font-medium">
                        Employee Name
                        </label>

                        <Input
                        id="employee-name"
                        placeholder="Enter employee name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="employee-email" className="text-sm font-medium">
                        Email Address
                        </label>

                        <Input
                        id="employee-email"
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                        Department
                        </label>

                        <Select value={department} onValueChange={setDepartment}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Engineering">Engineering</SelectItem>
                            <SelectItem value="Design">Design</SelectItem>
                            <SelectItem value="HR">Human Resources</SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                        </DialogClose>

                        <Button type="submit">
                        Save Employee
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}