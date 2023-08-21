-- CreateTable
CREATE TABLE "ColdRoom" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "RID" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "coldRoomAddress" TEXT,
    "tambon" TEXT,
    "amper" TEXT,
    "province" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "productType" TEXT,
    "roomWidth" DECIMAL(65,30) NOT NULL,
    "roomLength" DECIMAL(65,30) NOT NULL,
    "roomHeight" DECIMAL(65,30) NOT NULL,
    "maxTemp" DECIMAL(65,30),
    "minTemp" DECIMAL(65,30),
    "constructionType" TEXT NOT NULL,
    "year" INTEGER,
    "panelClass" TEXT NOT NULL DEFAULT 'EPS',
    "foamMass" DECIMAL(65,30) NOT NULL,
    "bizID" TEXT NOT NULL,

    CONSTRAINT "ColdRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HBCDCompany" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "bizType" TEXT,
    "bizID" TEXT NOT NULL,
    "licenseNo" TEXT,
    "officeAddress" TEXT NOT NULL,
    "officeTelNo" TEXT,
    "province" TEXT NOT NULL,

    CONSTRAINT "HBCDCompany_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ColdRoom_RID_key" ON "ColdRoom"("RID");

-- CreateIndex
CREATE UNIQUE INDEX "HBCDCompany_bizID_key" ON "HBCDCompany"("bizID");

-- AddForeignKey
ALTER TABLE "ColdRoom" ADD CONSTRAINT "ColdRoom_bizID_fkey" FOREIGN KEY ("bizID") REFERENCES "HBCDCompany"("bizID") ON DELETE RESTRICT ON UPDATE CASCADE;
