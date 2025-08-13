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
      return <CheckCircle className="h-5 w-5 text-blue-500" />;
    if (stage.status === "in-progress")
      return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />;
    return (
      <div className="w-4 h-4 rounded-full border-2 border-blue-200 bg-white" />
    );
  };

  const getStatusBadge = (statusText) => {
    switch (statusText) {
      case "Under Review":
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
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
        return (
          <Badge className="bg-gray-100 text-gray-800 border-gray-200">
            Pending
          </Badge>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-xl bg-white border border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl p-6 text-center">
          <CardTitle className="flex justify-center items-center gap-2 text-2xl font-bold">
            <FileText className="w-6 h-6" />
            Track Your Application
          </CardTitle>
          <p className="text-sm text-blue-100 mt-1">
            Check the status of your loan application in real-time
          </p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Input Section */}
          <div>
            <Label
              htmlFor="applicationId"
              className="text-blue-900 font-semibold"
            >
              Application ID
            </Label>
            <div className="flex gap-3 mt-2">
              <Input
                id="applicationId"
                placeholder="Enter your application ID"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                className="flex-1 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
              />
              <Button
                onClick={handleTrackStatus}
                disabled={!applicationId}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
              >
                Track
              </Button>
            </div>
          </div>

          {/* Status Summary */}
          {status && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Application #{status.id}
                    </h4>
                    <p className="text-sm text-blue-700">
                      Applied on {status.appliedDate}
                    </p>
                  </div>
                  {getStatusBadge(status.status)}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-900 font-medium">
                    Loan Amount:
                  </span>
                  <span className="text-blue-600 font-semibold">
                    {status.loanAmount}
                  </span>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">
                  Application Progress
                </h4>
                <div className="space-y-6">
                  {status.stages.map((stage, index) => (
                    <div key={stage.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        {getStageIcon(stage)}
                        {index < status.stages.length - 1 && (
                          <div className="w-0.5 h-8 bg-blue-200 mt-1" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h5
                            className={`font-medium ${
                              stage.status === "completed"
                                ? "text-blue-500"
                                : stage.status === "in-progress"
                                ? "text-blue-600"
                                : "text-blue-300"
                            }`}
                          >
                            {stage.title}
                          </h5>
                          {stage.date && (
                            <span className="text-xs text-blue-700">
                              {stage.date}
                            </span>
                          )}
                        </div>
                        {stage.status === "in-progress" && (
                          <p className="text-sm text-blue-700 mt-1">
                            We're currently reviewing your documents. This
                            usually takes 1-2 business days.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-1">
                  What's Next?
                </h4>
                <p className="text-sm text-blue-700">
                  We're reviewing your application. You will receive an update
                  via SMS or email. Contact support for any assistance.
                </p>
              </div>
            </div>
          )}

          {/* Placeholder when no status */}
          {!status && applicationId && (
            <div className="text-center text-sm text-blue-700 py-6">
              No application found. Please check your Application ID.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
