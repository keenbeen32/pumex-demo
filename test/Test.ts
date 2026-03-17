import assert from "assert";
import { 
  TestHelpers,
  MinterV2_Initialized
} from "generated";
const { MockDb, MinterV2 } = TestHelpers;

describe("MinterV2 contract Initialized event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for MinterV2 contract Initialized event
  const event = MinterV2.Initialized.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("MinterV2_Initialized is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await MinterV2.Initialized.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMinterV2Initialized = mockDbUpdated.entities.MinterV2_Initialized.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMinterV2Initialized: MinterV2_Initialized = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      version: event.params.version,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMinterV2Initialized, expectedMinterV2Initialized, "Actual MinterV2Initialized should be the same as the expectedMinterV2Initialized");
  });
});
