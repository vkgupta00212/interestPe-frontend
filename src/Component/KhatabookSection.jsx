import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 px-4 py-10 max-w-5xl mx-auto">
      <Tabs defaultValue="customers" className="w-full">
        <TabsList className="mb-8 flex justify-center gap-4 bg-blue-50 border border-blue-200 rounded-lg p-2">
          <TabsTrigger
            value="customers"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-200"
          >
            <User className="mr-2 h-4 w-4" /> Customers
          </TabsTrigger>
          <TabsTrigger
            value="transactions"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-200"
          >
            <TrendingUp className="mr-2 h-4 w-4" /> Transactions
          </TabsTrigger>
          <TabsTrigger
            value="summary"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-200"
          >
            <Calculator className="mr-2 h-4 w-4" /> Summary
          </TabsTrigger>
        </TabsList>

        {/* Customers */}
        <TabsContent value="customers">
          <Card className="shadow-lg rounded-xl border border-blue-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl p-6">
              <CardTitle className="text-xl font-bold">
                Add New Customer
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-blue-900 font-semibold">Name</Label>
                  <Input
                    placeholder="Customer name"
                    value={newCustomer.name}
                    onChange={(e) =>
                      setNewCustomer({ ...newCustomer, name: e.target.value })
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  />
                </div>
                <div>
                  <Label className="text-blue-900 font-semibold">Phone</Label>
                  <Input
                    placeholder="+91..."
                    value={newCustomer.phone}
                    onChange={(e) =>
                      setNewCustomer({ ...newCustomer, phone: e.target.value })
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  />
                </div>
              </div>
              <Button
                onClick={addCustomer}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg rounded-xl border border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                Customer List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-900">Name</TableHead>
                    <TableHead className="text-blue-900">Phone</TableHead>
                    <TableHead className="text-right text-blue-900">
                      Balance
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((c) => (
                    <TableRow
                      key={c.id}
                      className="hover:bg-blue-50 transition-all duration-200"
                    >
                      <TableCell className="text-blue-900">{c.name}</TableCell>
                      <TableCell className="text-blue-700">{c.phone}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          className={
                            c.balance >= 0
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          ₹{c.balance.toLocaleString()}
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
          <Card className="shadow-lg rounded-xl border border-blue-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl p-6">
              <CardTitle className="text-xl font-bold">
                Add Transaction
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-blue-900 font-semibold">
                    Customer Name
                  </Label>
                  <Input
                    placeholder="Who is this for?"
                    value={newTransaction.customerName}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        customerName: e.target.value,
                      })
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  />
                </div>
                <div>
                  <Label className="text-blue-900 font-semibold">Amount</Label>
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
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  />
                </div>
                <div>
                  <Label className="text-blue-900 font-semibold">Type</Label>
                  <select
                    className="w-full mt-2 border border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg px-3 py-2 text-blue-900 text-sm transition-all duration-200"
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
                  <Label className="text-blue-900 font-semibold">
                    Description
                  </Label>
                  <Input
                    placeholder="Optional notes"
                    value={newTransaction.description}
                    onChange={(e) =>
                      setNewTransaction({
                        ...newTransaction,
                        description: e.target.value,
                      })
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  />
                </div>
              </div>
              <Button
                onClick={addTransaction}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg rounded-xl border border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                Transactions List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-900">Date</TableHead>
                    <TableHead className="text-blue-900">Customer</TableHead>
                    <TableHead className="text-blue-900">Amount</TableHead>
                    <TableHead className="text-blue-900">Type</TableHead>
                    <TableHead className="text-blue-900">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((t) => (
                    <TableRow
                      key={t.id}
                      className="hover:bg-blue-50 transition-all duration-200"
                    >
                      <TableCell className="text-blue-900">{t.date}</TableCell>
                      <TableCell className="text-blue-900">
                        {t.customerName}
                      </TableCell>
                      <TableCell className="text-blue-900">
                        ₹{t.amount.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            t.type === "credit"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-blue-700">
                        {t.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Summary */}
        <TabsContent value="summary">
          <Card className="shadow-lg rounded-xl border border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                Account Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-900 font-medium">Total Credit:</span>
                <span className="text-blue-600 font-semibold">
                  ₹{totalCredit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900 font-medium">Total Debit:</span>
                <span className="text-red-600 font-semibold">
                  ₹{totalDebit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-blue-200">
                <span className="text-blue-900">Net Balance:</span>
                <span
                  className={`${
                    netBalance >= 0 ? "text-blue-600" : "text-red-600"
                  } font-semibold`}
                >
                  ₹{netBalance.toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
