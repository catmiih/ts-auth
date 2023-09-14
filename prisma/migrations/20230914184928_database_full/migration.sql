-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "active" INTEGER NOT NULL,
    "port_numb" INTEGER,
    "quota_count" INTEGER NOT NULL,
    "total_value" DECIMAL(65,30) NOT NULL,
    "trade_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Active" (
    "id" SERIAL NOT NULL,
    "shortname" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,

    CONSTRAINT "Active_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "sub_type" TEXT NOT NULL,
    "activeid" INTEGER,

    CONSTRAINT "ActiveType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveHistory" (
    "id" SERIAL NOT NULL,
    "data_time" TIMESTAMP(3) NOT NULL,
    "quota_value" DECIMAL(65,30) NOT NULL,
    "valuation" DECIMAL(65,30) NOT NULL,
    "activeid" INTEGER,

    CONSTRAINT "ActiveHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dividendHistory" (
    "id" SERIAL NOT NULL,
    "data_time" TIMESTAMP(3) NOT NULL,
    "dividend_yield" DECIMAL(65,30) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "activeid" INTEGER,

    CONSTRAINT "dividendHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "activeid" INTEGER,
    "userid" INTEGER,
    "type" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_port_numb_key" ON "Transaction"("port_numb");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveType_activeid_key" ON "ActiveType"("activeid");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveHistory_activeid_key" ON "ActiveHistory"("activeid");

-- CreateIndex
CREATE UNIQUE INDEX "dividendHistory_activeid_key" ON "dividendHistory"("activeid");

-- CreateIndex
CREATE UNIQUE INDEX "Alert_activeid_key" ON "Alert"("activeid");

-- CreateIndex
CREATE UNIQUE INDEX "Alert_userid_key" ON "Alert"("userid");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_port_numb_fkey" FOREIGN KEY ("port_numb") REFERENCES "Portfolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveType" ADD CONSTRAINT "ActiveType_activeid_fkey" FOREIGN KEY ("activeid") REFERENCES "Active"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveHistory" ADD CONSTRAINT "ActiveHistory_activeid_fkey" FOREIGN KEY ("activeid") REFERENCES "Active"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dividendHistory" ADD CONSTRAINT "dividendHistory_activeid_fkey" FOREIGN KEY ("activeid") REFERENCES "Active"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_activeid_fkey" FOREIGN KEY ("activeid") REFERENCES "Active"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
