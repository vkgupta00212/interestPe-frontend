import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Plus, User, TrendingUp, Calculator } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const KhatabookSection = () => {
  const { toast } = useToast();
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      customerName: "Rajesh Kumar",
      amount: 5000,
      type: "credit",
      description: "Payment received",
      date: "2024-01-15",
    },
    {
      id: "2",
      customerName: "Priya Sharma",
      amount: 2500,
      type: "debit",
      description: "Goods sold on credit",
      date: "2024-01-14",
    },
  ]);

  const [customers, setCustomers] = useState([
    { id: "1", name: "Rajesh Kumar", phone: "+91 98765 43210", balance: 5000 },
    { id: "2", name: "Priya Sharma", phone: "+91 87654 32109", balance: -2500 },
    { id: "3", name: "Amit Singh", phone: "+91 76543 21098", balance: 1200 },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    customerName: "",
    amount: "",
    type: "credit",
    description: "",
  });

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
  });

  const addTransaction = () => {
    if (!newTransaction.customerName || !newTransaction.amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const transaction = {
      id: Date.now().toString(),
      customerName: newTransaction.customerName,
      amount: parseFloat(newTransaction.amount),
      type: newTransaction.type,
      description: newTransaction.description,
      date: new Date().toISOString().split("T")[0],
    };

    setTransactions([transaction, ...transactions]);
    setNewTransaction({
      customerName: "",
      amount: "",
      type: "credit",
      description: "",
    });

    toast({
      title: "Transaction Added",
      description: "Transaction has been recorded successfully",
    });
  };

  const addCustomer = () => {
    if (!newCustomer.name || !newCustomer.phone) {
      toast({
        title: "Missing Information",
        description: "Please enter customer name and phone",
        variant: "destructive",
      });
      return;
    }

    const customer = {
      id: Date.now().toString(),
      name: newCustomer.name,
      phone: newCustomer.phone,
      balance: 0,
    };

    setCustomers([customer, ...customers]);
    setNewCustomer({ name: "", phone: "" });

    toast({
      title: "Customer Added",
      description: "New customer has been added successfully",
    });
  };

  const totalCredit = transactions
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalDebit = transactions
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);
  const netBalance = totalCredit - totalDebit;

  return (
    <div className="space-y-10 px-4 max-w-5xl mx-auto">
      <Tabs defaultValue="customers" className="w-full">
        <TabsList className="mb-6 flex justify-center gap-4">
          <TabsTrigger value="customers">
            <User className="mr-2 h-4 w-4" /> Customers
          </TabsTrigger>
          <TabsTrigger value="transactions">
            <TrendingUp className="mr-2 h-4 w-4" /> Transactions
          </TabsTrigger>
          <TabsTrigger value="summary">
            <Calculator className="mr-2 h-4 w-4" /> Summary
          </TabsTrigger>
        </TabsList>

        {/* Customers */}
        <TabsContent value="customers">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Add New Customer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    placeholder="Customer name"
                    value={newCustomer.name}
                    onChange={(e) =>
                      setNewCustomer({ ...newCustomer, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input
                    placeholder="+91..."
                    value={newCustomer.phone}
                    onChange={(e) =>
                      setNewCustomer({ ...newCustomer, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <Button onClick={addCustomer} className="mt-2">
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-sm">
            <CardHeader>
              <CardTitle>Customer List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{c.phone}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={c.balance >= 0 ? "default" : "destructive"}
                        >
                          ₹{c.balance}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transactions */}
        <TabsContent value="transactions">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Add Transaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Customer Name</Label>
                  <Input
                    placeholder="Who is this for?"
                    value={newTransaction.customerName}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        customerName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label>Amount</Label>
                  <Input
                    type="number"
                    placeholder="₹"
                    value={newTransaction.amount}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        amount: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label>Type</Label>
                  <select
                    className="w-full border border-input rounded-md px-3 py-2 text-sm"
                    value={newTransaction.type}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        type: e.target.value,
                      })
                    }
                  >
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                  </select>
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    placeholder="Optional notes"
                    value={newTransaction.description}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <Button onClick={addTransaction} className="mt-2">
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Transactions List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell>{t.date}</TableCell>
                      <TableCell>{t.customerName}</TableCell>
                      <TableCell>₹{t.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            t.type === "credit" ? "default" : "destructive"
                          }
                        >
                          {t.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{t.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Summary */}
        <TabsContent value="summary">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Total Credit:</span>
                <span className="text-green-600 font-medium">
                  ₹{totalCredit}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Debit:</span>
                <span className="text-red-600 font-medium">₹{totalDebit}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Net Balance:</span>
                <span
                  className={`${
                    netBalance >= 0 ? "text-green-700" : "text-red-700"
                  }`}
                >
                  ₹{netBalance}
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
