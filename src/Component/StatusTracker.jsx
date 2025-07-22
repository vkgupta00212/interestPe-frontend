import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, FileText } from "lucide-react";

export const StatusTracker = () => {
  const [applicationId, setApplicationId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrackStatus = () => {
    setStatus({
      id: applicationId,
      currentStage: 2,
      status: "Under Review",
      loanAmount: "₹2,50,000",
      appliedDate: "15 Dec 2024",
      stages: [
        {
          id: 1,
          title: "Application Submitted",
          status: "completed",
          date: "15 Dec 2024",
        },
        {
          id: 2,
          title: "Document Verification",
          status: "in-progress",
          date: "16 Dec 2024",
        },
        { id: 3, title: "Credit Assessment", status: "pending", date: "" },
        { id: 4, title: "Approval", status: "pending", date: "" },
        { id: 5, title: "Disbursement", status: "pending", date: "" },
      ],
    });
  };

  const getStageIcon = (stage) => {
    if (stage.status === "completed")
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (stage.status === "in-progress")
      return <Clock className="h-5 w-5 text-blue-500 animate-pulse" />;
    return (
      <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white" />
    );
  };

  const getStatusBadge = (statusText) => {
    switch (statusText) {
      case "Under Review":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
            Under Review
          </Badge>
        );
      case "Approved":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            Approved
          </Badge>
        );
      case "Rejected":
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200">
            Rejected
          </Badge>
        );
      default:
        return <Badge>Pending</Badge>;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md rounded-xl border">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 rounded-t-xl text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-xl font-semibold">
          <FileText className="w-5 h-5" />
          Track Your Application
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Input Section */}
        <div>
          <Label htmlFor="applicationId" className="font-medium">
            Application ID
          </Label>
          <div className="flex gap-2 mt-2">
            <Input
              id="applicationId"
              placeholder="Enter your application ID"
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTrackStatus} disabled={!applicationId}>
              Track
            </Button>
          </div>
        </div>

        {/* Status Summary */}
        {status && (
          <div className="space-y-6">
            <div className="bg-gray-50 border rounded-lg p-4 shadow-sm space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Application #{status.id}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Applied on {status.appliedDate}
                  </p>
                </div>
                {getStatusBadge(status.status)}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Loan Amount:</span>
                <span className="text-blue-600 font-semibold">
                  {status.loanAmount}
                </span>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">
                Application Progress
              </h4>
              <div className="space-y-6">
                {status.stages.map((stage, index) => (
                  <div key={stage.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      {getStageIcon(stage)}
                      {index < status.stages.length - 1 && (
                        <div className="w-0.5 h-8 bg-gray-300 mt-1" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h5
                          className={`font-medium ${
                            stage.status === "completed"
                              ? "text-green-600"
                              : stage.status === "in-progress"
                              ? "text-blue-600"
                              : "text-gray-400"
                          }`}
                        >
                          {stage.title}
                        </h5>
                        {stage.date && (
                          <span className="text-xs text-gray-400">
                            {stage.date}
                          </span>
                        )}
                      </div>
                      {stage.status === "in-progress" && (
                        <p className="text-sm text-gray-500 mt-1">
                          We're currently reviewing your documents. This usually
                          takes 1-2 business days.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-1">What's Next?</h4>
              <p className="text-sm text-blue-600">
                We're reviewing your application. You will receive an update via
                SMS or email. Contact support for any assistance.
              </p>
            </div>
          </div>
        )}

        {/* Placeholder when no status */}
        {!status && applicationId && (
          <div className="text-center text-sm text-gray-400 py-6">
            Searching for your application...
          </div>
        )}
      </CardContent>
    </Card>
  );
};
