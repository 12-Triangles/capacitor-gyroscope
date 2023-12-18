import Foundation

@objc public class Gyroscope: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
